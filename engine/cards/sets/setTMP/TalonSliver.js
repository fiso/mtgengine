"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalonSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Talon Sliver", "Tempest", "TMP");
  }
}

module.exports = TalonSliver;
