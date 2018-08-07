"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boomflinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Boomflinger", "Unstable", "UST");
  }
}

module.exports = Boomflinger;
