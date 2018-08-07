"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TribalGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Tribal Golem", "Onslaught", "ONS");
  }
}

module.exports = TribalGolem;
