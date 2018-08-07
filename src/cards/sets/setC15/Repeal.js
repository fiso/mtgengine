"use strict";
const Constants = require ("../../../Constants");
const RepealBase = require("../setIMA/Repeal");

class Repeal extends RepealBase {
  constructor (game) {
    super(game, "Repeal", "Commander 2015", "C15");
  }
}

module.exports = Repeal;
