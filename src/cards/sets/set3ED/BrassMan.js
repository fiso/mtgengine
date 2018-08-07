"use strict";
const Constants = require ("../../../Constants");
const BrassManBase = require("../setME4/BrassMan");

class BrassMan extends BrassManBase {
  constructor (game) {
    super(game, "Brass Man", "Revised Edition", "3ED");
  }
}

module.exports = BrassMan;
