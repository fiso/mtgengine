"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FulgentDistraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Fulgent Distraction", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FulgentDistraction;
