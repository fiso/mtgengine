"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extirpate extends UnimplementedCard {
  constructor (game) {
    super(game, "Extirpate", "Modern Masters", "MMA");
  }
}

module.exports = Extirpate;
