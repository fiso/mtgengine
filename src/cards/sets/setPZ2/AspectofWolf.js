"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AspectofWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Aspect of Wolf", "You Make the Cube", "PZ2");
  }
}

module.exports = AspectofWolf;
