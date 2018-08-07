"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildOnslaught extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Onslaught", "Dominaria", "DOM");
  }
}

module.exports = WildOnslaught;
