"use strict";
const Constants = require ("../../../Constants");
const BrassManBase = require("../setME4/BrassMan");

class BrassMan extends BrassManBase {
  constructor (game) {
    super(game, "Brass Man", "Fourth Edition", "4ED");
  }
}

module.exports = BrassMan;
