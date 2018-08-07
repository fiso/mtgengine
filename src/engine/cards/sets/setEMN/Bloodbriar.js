"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bloodbriar extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodbriar", "Eldritch Moon", "EMN");
  }
}

module.exports = Bloodbriar;
