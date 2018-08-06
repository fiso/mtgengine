"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CertainDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Certain Death", "Eldritch Moon", "EMN");
  }
}

module.exports = CertainDeath;
