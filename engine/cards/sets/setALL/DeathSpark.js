"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathSpark extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Spark", "Alliances", "ALL");
  }
}

module.exports = DeathSpark;
