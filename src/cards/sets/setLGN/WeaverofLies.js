"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeaverofLies extends UnimplementedCard {
  constructor (game) {
    super(game, "Weaver of Lies", "Legions", "LGN");
  }
}

module.exports = WeaverofLies;
