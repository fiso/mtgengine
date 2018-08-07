"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasInfluence extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Influence", "Amonkhet", "AKH");
  }
}

module.exports = LilianasInfluence;
