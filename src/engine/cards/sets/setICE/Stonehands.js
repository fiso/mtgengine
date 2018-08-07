"use strict";
const Constants = require ("../../../Constants");
const StonehandsBase = require("../setME2/Stonehands");

class Stonehands extends StonehandsBase {
  constructor (game) {
    super(game, "Stonehands", "Ice Age", "ICE");
  }
}

module.exports = Stonehands;
