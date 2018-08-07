"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Expedite extends UnimplementedCard {
  constructor (game) {
    super(game, "Expedite", "Battlebond", "BBD");
  }
}

module.exports = Expedite;
