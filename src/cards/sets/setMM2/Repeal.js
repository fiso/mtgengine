"use strict";
const Constants = require ("../../../Constants");
const RepealBase = require("../setC15/Repeal");

class Repeal extends RepealBase {
  constructor (game) {
    super(game, "Repeal", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Repeal;
