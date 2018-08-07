"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bonehoard extends UnimplementedCard {
  constructor (game) {
    super(game, "Bonehoard", "Commander Anthology", "CMA");
  }
}

module.exports = Bonehoard;
