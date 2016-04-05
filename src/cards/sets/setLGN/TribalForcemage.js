"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TribalForcemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Tribal Forcemage", "Legions", "LGN");
  }
}

module.exports = TribalForcemage;
