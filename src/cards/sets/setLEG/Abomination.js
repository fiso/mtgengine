"use strict";
const Constants = require ("../../../Constants");
const AbominationBase = require("../set4ED/Abomination");

class Abomination extends AbominationBase {
  constructor(game) {
    super(game, "Abomination", "Legends", "LEG");
  }
}

module.exports = Abomination;
