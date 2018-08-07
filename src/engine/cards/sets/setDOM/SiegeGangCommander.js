"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeGangCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege-Gang Commander", "Dominaria", "DOM");
  }
}

module.exports = SiegeGangCommander;
