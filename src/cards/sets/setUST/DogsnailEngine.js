"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DogsnailEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Dogsnail Engine", "Unstable", "UST");
  }
}

module.exports = DogsnailEngine;
