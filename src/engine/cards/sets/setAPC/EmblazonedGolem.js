"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmblazonedGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Emblazoned Golem", "Apocalypse", "APC");
  }
}

module.exports = EmblazonedGolem;
