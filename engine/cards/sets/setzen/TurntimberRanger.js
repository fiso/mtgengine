"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntimberRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Turntimber Ranger", "Zendikar", "ZEN");
  }
}

module.exports = TurntimberRanger;
