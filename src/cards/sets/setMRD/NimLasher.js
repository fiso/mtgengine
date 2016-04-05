"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimLasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Nim Lasher", "Mirrodin", "MRD");
  }
}

module.exports = NimLasher;
