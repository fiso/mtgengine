"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AutoKey extends UnimplementedCard {
  constructor (game) {
    super(game, "Auto-Key", "Unstable", "UST");
  }
}

module.exports = AutoKey;
