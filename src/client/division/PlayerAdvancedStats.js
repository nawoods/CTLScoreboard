import "./PlayerAdvancedStats.css";
import React from "react";

function PlayerAdvancedStats(props) {
  return (
    <div className="Player-advanced-stats">
      <h4>Advanced Stats</h4>
      {props.division.numWinner === 0 && (
        <div className="Stats-winner">
          Division Win Chance:{" "}
          {props.renderPercentageFunc(props.playerData.divisionWinChance)}
        </div>
      )}
      {/* {props.division.numPrizeMoney && (
        <div className="Stats-winner">
          Prize Money Chance:{" "}
          {props.renderPercentageFunc(props.playerData.prizeMoneyChance)}
        </div>
      )} */}
      Placement Odds:
      <table>
        {props.division.numAutoPromo + props.division.numWinner > 0 && (
          <tr
            className={
              props.division.divisionName === "1"
                ? "Stats-winner"
                : "Stats-auto-promo"
            }
          >
            <td>
              {props.division.divisionName === "1" ? "Winner" : "Promotion"}
            </td>
            <td>
              {props.renderPercentageFunc(props.playerData.autoPromoChance)}
            </td>
          </tr>
        )}

        {props.division.numPrizeMoney > 0 && (
          <tr className={"Stats-prize-money"}>
            <td>Prize Money</td>
            <td>
              {props.renderPercentageFunc(
                props.playerData.prizeMoneyChance -
                  props.playerData.autoPromoChance
              )}
            </td>
          </tr>
        )}

        {props.division.numPlayoffPromo > 0 && (
          <tr className="Stats-playoff-promo">
            <td>Upper Tier</td>
            <td>
              {props.renderPercentageFunc(props.playerData.playoffPromoChance)}
            </td>
          </tr>
        )}

        <tr className="Stats-unchanged">
          <td>Unchanged</td>
          <td>
            {props.renderPercentageFunc(
              100 -
                (props.division.numPrizeMoney > 0
                  ? props.playerData.prizeMoneyChance
                  : props.playerData.autoPromoChance +
                    props.playerData.playoffPromoChance) -
                props.playerData.autoRelegationChance -
                props.playerData.playoffRelegationChance
            )}
          </td>
        </tr>

        {props.division.numPlayoffRelegate > 0 && (
          <tr className="Stats-playoff-relegation">
            <td>Lower Tier</td>
            <td>
              {props.renderPercentageFunc(
                props.playerData.playoffRelegationChance
              )}
            </td>
          </tr>
        )}

        {props.division.numAutoRelegate > 0 && (
          <tr className="Stats-auto-relegation">
            <td>Relegation</td>
            <td>
              {props.renderPercentageFunc(
                props.playerData.autoRelegationChance
              )}
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default PlayerAdvancedStats;
