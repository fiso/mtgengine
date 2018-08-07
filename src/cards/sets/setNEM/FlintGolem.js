"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlintGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Flint Golem", "Nemesis", "NEM");
  }
}

module.exports = FlintGolem;
