"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwallowtheHeroWhole extends UnimplementedCard {
  constructor (game) {
    super(game, "Swallow the Hero Whole", "Face the Hydra", "TFTH");
  }
}

module.exports = SwallowtheHeroWhole;
