"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritoftheHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit of the Hunt", "Eldritch Moon", "EMN");
  }
}

module.exports = SpiritoftheHunt;
