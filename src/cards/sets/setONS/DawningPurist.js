"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawningPurist extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawning Purist", "Onslaught", "ONS");
  }
}

module.exports = DawningPurist;
