"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setARC/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "Urza's Legacy", "ULG");
  }
}

module.exports = Rancor;
