"use strict";
const Constants = require ("../../../Constants");
const HatredBase = require("../setWC99/Hatred");

class Hatred extends HatredBase {
  constructor (game) {
    super(game, "Hatred", "Exodus", "EXO");
  }
}

module.exports = Hatred;
