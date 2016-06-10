"use strict";
const Constants = require ("../../../Constants");
const FugueBase = require("../setEXO/Fugue");

class Fugue extends FugueBase {
  constructor (game) {
    super(game, "Fugue", "Tempest Remastered", "TPR");
  }
}

module.exports = Fugue;
