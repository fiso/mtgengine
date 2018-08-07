"use strict";
const Constants = require ("../../../Constants");
const YidrisMaelstromWielderBase = require("../setPZ2/YidrisMaelstromWielder");

class YidrisMaelstromWielder extends YidrisMaelstromWielderBase {
  constructor (game) {
    super(game, "Yidris, Maelstrom Wielder", "Commander 2016 Oversized", "OC16");
  }
}

module.exports = YidrisMaelstromWielder;
