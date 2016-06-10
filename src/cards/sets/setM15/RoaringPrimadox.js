"use strict";
const Constants = require ("../../../Constants");
const RoaringPrimadoxBase = require("../setM13/RoaringPrimadox");

class RoaringPrimadox extends RoaringPrimadoxBase {
  constructor (game) {
    super(game, "Roaring Primadox", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RoaringPrimadox;
