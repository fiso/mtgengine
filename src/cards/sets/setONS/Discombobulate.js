"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Discombobulate extends UnimplementedCard {
  constructor(game) {
    super(game, "Discombobulate", "Onslaught", "ONS");
  }
}

module.exports = Discombobulate;
