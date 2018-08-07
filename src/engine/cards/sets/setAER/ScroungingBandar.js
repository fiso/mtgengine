"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScroungingBandar extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrounging Bandar", "Aether Revolt", "AER");
  }
}

module.exports = ScroungingBandar;
