"use strict";
const Constants = require ("../../../Constants");
const FugueBase = require("../setTPR/Fugue");

class Fugue extends FugueBase {
  constructor (game) {
    super(game, "Fugue", "Exodus", "EXO");
  }
}

module.exports = Fugue;
