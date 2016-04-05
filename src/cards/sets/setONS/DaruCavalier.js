"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruCavalier extends UnimplementedCard {
  constructor(game) {
    super(game, "Daru Cavalier", "Onslaught", "ONS");
  }
}

module.exports = DaruCavalier;
