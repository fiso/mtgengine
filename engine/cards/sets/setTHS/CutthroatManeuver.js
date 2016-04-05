"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CutthroatManeuver extends UnimplementedCard {
  constructor(game) {
    super(game, "Cutthroat Maneuver", "Theros", "THS");
  }
}

module.exports = CutthroatManeuver;
