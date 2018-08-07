"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrotagSiegeRunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Grotag Siege-Runner", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GrotagSiegeRunner;
