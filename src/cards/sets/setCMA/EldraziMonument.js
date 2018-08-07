"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Monument", "Commander Anthology", "CMA");
  }
}

module.exports = EldraziMonument;
