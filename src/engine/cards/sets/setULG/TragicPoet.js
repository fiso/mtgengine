"use strict";
const Constants = require ("../../../Constants");
const TragicPoetBase = require("../setDOM/TragicPoet");

class TragicPoet extends TragicPoetBase {
  constructor (game) {
    super(game, "Tragic Poet", "Urza's Legacy", "ULG");
  }
}

module.exports = TragicPoet;
