"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Elite", "Gatecrash", "GTC");
  }
}

module.exports = BorosElite;
