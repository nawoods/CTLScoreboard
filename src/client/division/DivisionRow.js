import PenaltyPointsEditor from "./PenaltyPointsEditor";
import PlayerAdvancedStats from "./PlayerAdvancedStats";
import React, { Component } from "react";
const divisionColorUtil = require("./division-color-util");
import "./DivisionRow.css";

class DivisionRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  renderPercentage(percentChance) {
    if (percentChance === undefined) {
      return "-";
    }
    const floatPercent = parseFloat(percentChance);
    // Quasi-clinch
    if (floatPercent !== 0 && floatPercent < 0.01) {
      return "<0.01%";
    }
    if (floatPercent !== 100 && floatPercent > 99.99) {
      return ">99.99%";
    }
    // Small chance but not clinched
    if (floatPercent !== 0 && floatPercent < 0.5) {
      return "<1%";
    }
    if (floatPercent !== 100 && floatPercent > 99.5) {
      return ">99%";
    }
    return floatPercent.toFixed(0) + "%";
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const overallPromoChance =
      this.props.player.autoPromoChance +
      0.5 * this.props.player.playoffPromoChance;
    const overallRelegationChance =
      this.props.player.autoRelegationChance +
      0.5 * this.props.player.playoffRelegationChance;

    return (
      <React.Fragment>
        {/* Main content row */}
        <tr
          key={this.props.index}
          className="Player-main-row"
          style={{
            backgroundColor: this.props.bgColor
          }}
          onClick={this.toggleOpen}
        >
          <td className="Extra-padding-left">{this.props.index + 1}</td>
          <td className="No-wrap">{this.props.player.name}</td>
          <td>
            {this.props.player.mp} / {this.props.totalMatchesInSeason}
          </td>
          <td>
            {this.props.player.wins} - {this.props.player.losses}
          </td>
          <td>
            {this.props.player.gf} - {this.props.player.ga}
          </td>
          <td>{this.props.player.gd}</td>
          <td>
            <PenaltyPointsEditor
              isAdmin={this.props.isAdmin}
              existingPenaltyPoints={this.props.player.penaltyPoints}
              isEditingPenaltyPoints={this.props.isEditingPenaltyPoints}
              refreshFunction={this.props.refreshFunction}
              playerName={this.props.player.name}
              divisionName={this.props.data.divisionName}
            />
          </td>
          <td>{this.props.player.points}</td>
          <td
            className="Simulation-data-cell"
            style={{
              backgroundColor:
                this.props.data.divisionName === "1"
                  ? divisionColorUtil.getWinGradientColor(overallPromoChance)
                  : divisionColorUtil.getPromoGradientColor(overallPromoChance)
            }}
          >
            {this.renderPercentage(overallPromoChance)}
          </td>
          <td
            className="Simulation-data-cell"
            style={{
              backgroundColor: divisionColorUtil.getRelegationGradientColor(
                overallRelegationChance
              )
            }}
          >
            {this.renderPercentage(overallRelegationChance)}
          </td>
        </tr>

        {/* Expandible row with additional stats and info */}
        <tr
          key={this.props.index}
          style={{
            backgroundColor: "#ddd"
          }}
        >
          <td colSpan={10} style={{ padding: "0" }}>
            <div
              className="Expandible-content"
              style={{
                maxHeight: this.state.isOpen ? "none" : "0",
                overflow: "hidden"
              }}
            >
              <div className="Player-opponents-left">
                This is where upcoming opponents go
              </div>
              <div className="Player-advanced-stats">
                <PlayerAdvancedStats
                  playerData={this.props.player}
                  renderPercentageFunc={this.renderPercentage}
                  division={this.props.data}
                />
              </div>
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default DivisionRow;
