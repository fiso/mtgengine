"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathSpark extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Spark", "Masters Edition II", "ME2");
  }
}

module.exports = DeathSpark;
