"use strict";
const Constants = require ("../../../Constants");
const TimberpackWolfBase = require("../setA25/TimberpackWolf");

class TimberpackWolf extends TimberpackWolfBase {
  constructor (game) {
    super(game, "Timberpack Wolf", "Magic 2013", "M13");
  }
}

module.exports = TimberpackWolf;
