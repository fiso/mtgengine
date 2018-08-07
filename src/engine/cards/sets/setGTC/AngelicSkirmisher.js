"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicSkirmisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Skirmisher", "Gatecrash", "GTC");
  }
}

module.exports = AngelicSkirmisher;
