"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arena extends UnimplementedCard {
  constructor(game) {
    super(game, "Arena", "Media Inserts", "pMEI");
  }
}

module.exports = Arena;
