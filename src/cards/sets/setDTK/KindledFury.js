"use strict";
const Constants = require ("../../../Constants");
const KindledFuryBase = require("../setHOU/KindledFury");

class KindledFury extends KindledFuryBase {
  constructor (game) {
    super(game, "Kindled Fury", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KindledFury;
