"use strict";
const Constants = require ("../../../Constants");
const RoaringPrimadoxBase = require("../setM15/RoaringPrimadox");

class RoaringPrimadox extends RoaringPrimadoxBase {
  constructor (game) {
    super(game, "Roaring Primadox", "Magic 2013", "M13");
  }
}

module.exports = RoaringPrimadox;
