"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MausoleumWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mausoleum Wanderer", "Eldritch Moon", "EMN");
  }
}

module.exports = MausoleumWanderer;
