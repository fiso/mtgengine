"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedBasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Spined Basher", "Onslaught", "ONS");
  }
}

module.exports = SpinedBasher;
