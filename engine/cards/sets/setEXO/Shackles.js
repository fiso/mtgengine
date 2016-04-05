"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shackles extends UnimplementedCard {
  constructor(game) {
    super(game, "Shackles", "Exodus", "EXO");
  }
}

module.exports = Shackles;
