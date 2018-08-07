"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirebrandArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Firebrand Archer", "Hour of Devastation", "HOU");
  }
}

module.exports = FirebrandArcher;
