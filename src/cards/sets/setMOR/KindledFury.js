"use strict";
const Constants = require ("../../../Constants");
const KindledFuryBase = require("../setDTK/KindledFury");

class KindledFury extends KindledFuryBase {
  constructor (game) {
    super(game, "Kindled Fury", "Morningtide", "MOR");
  }
}

module.exports = KindledFury;
