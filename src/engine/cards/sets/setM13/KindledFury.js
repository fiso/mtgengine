"use strict";
const Constants = require ("../../../Constants");
const KindledFuryBase = require("../setHOU/KindledFury");

class KindledFury extends KindledFuryBase {
  constructor (game) {
    super(game, "Kindled Fury", "Magic 2013", "M13");
  }
}

module.exports = KindledFury;
