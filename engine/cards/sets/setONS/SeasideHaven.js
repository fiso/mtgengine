"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasideHaven extends UnimplementedCard {
  constructor(game) {
    super(game, "Seaside Haven", "Onslaught", "ONS");
  }
}

module.exports = SeasideHaven;
