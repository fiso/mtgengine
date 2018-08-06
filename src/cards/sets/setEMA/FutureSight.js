"use strict";
const Constants = require ("../../../Constants");
const FutureSightBase = require("../setDDM/FutureSight");

class FutureSight extends FutureSightBase {
  constructor (game) {
    super(game, "Future Sight", "Eternal Masters", "EMA");
  }
}

module.exports = FutureSight;
