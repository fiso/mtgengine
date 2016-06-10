"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HinderingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Hindering Light", "Shards of Alara", "ALA");
  }
}

module.exports = HinderingLight;
