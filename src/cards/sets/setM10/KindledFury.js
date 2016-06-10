"use strict";
const Constants = require ("../../../Constants");
const KindledFuryBase = require("../setDTK/KindledFury");

class KindledFury extends KindledFuryBase {
  constructor (game) {
    super(game, "Kindled Fury", "Magic 2010", "M10");
  }
}

module.exports = KindledFury;
