"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharedFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Shared Fate", "Mirrodin", "MRD");
  }
}

module.exports = SharedFate;
