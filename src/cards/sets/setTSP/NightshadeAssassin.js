"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightshadeAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightshade Assassin", "Time Spiral", "TSP");
  }
}

module.exports = NightshadeAssassin;
