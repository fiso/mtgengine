"use strict";
const Constants = require ("../../../Constants");
const RepealBase = require("../setIMA/Repeal");

class Repeal extends RepealBase {
  constructor (game) {
    super(game, "Repeal", "Modern Masters 2015", "MM2");
  }
}

module.exports = Repeal;
