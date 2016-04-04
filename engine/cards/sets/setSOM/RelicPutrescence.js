"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicPutrescence extends UnimplementedCard {
  constructor(game) {
    super(game, "Relic Putrescence", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RelicPutrescence;
