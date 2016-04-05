"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllyEncampment extends UnimplementedCard {
  constructor(game) {
    super(game, "Ally Encampment", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AllyEncampment;
