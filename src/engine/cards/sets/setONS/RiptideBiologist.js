"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiptideBiologist extends UnimplementedCard {
  constructor (game) {
    super(game, "Riptide Biologist", "Onslaught", "ONS");
  }
}

module.exports = RiptideBiologist;
