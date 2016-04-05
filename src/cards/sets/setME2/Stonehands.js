"use strict";
const Constants = require ("../../../Constants");
const StonehandsBase = require("../setICE/Stonehands");

class Stonehands extends StonehandsBase {
  constructor(game) {
    super(game, "Stonehands", "Masters Edition II", "ME2");
  }
}

module.exports = Stonehands;
