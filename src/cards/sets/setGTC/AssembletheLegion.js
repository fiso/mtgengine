"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssembletheLegion extends UnimplementedCard {
  constructor (game) {
    super(game, "Assemble the Legion", "Gatecrash", "GTC");
  }
}

module.exports = AssembletheLegion;
