"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DjinnMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Djinn Monk", "Iconic Masters Tokens", "TIMA");
  }
}

module.exports = DjinnMonk;
