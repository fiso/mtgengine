"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleverCombo extends UnimplementedCard {
  constructor (game) {
    super(game, "Clever Combo", "Unstable", "UST");
  }
}

module.exports = CleverCombo;
