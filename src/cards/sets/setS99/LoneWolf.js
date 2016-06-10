"use strict";
const Constants = require ("../../../Constants");
const LoneWolfBase = require("../set8ED/LoneWolf");

class LoneWolf extends LoneWolfBase {
  constructor (game) {
    super(game, "Lone Wolf", "Starter 1999", "S99");
  }
}

module.exports = LoneWolf;
