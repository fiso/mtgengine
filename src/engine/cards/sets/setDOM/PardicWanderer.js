"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Pardic Wanderer", "Dominaria", "DOM");
  }
}

module.exports = PardicWanderer;
