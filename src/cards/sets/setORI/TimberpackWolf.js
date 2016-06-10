"use strict";
const Constants = require ("../../../Constants");
const TimberpackWolfBase = require("../setM13/TimberpackWolf");

class TimberpackWolf extends TimberpackWolfBase {
  constructor (game) {
    super(game, "Timberpack Wolf", "Magic Origins", "ORI");
  }
}

module.exports = TimberpackWolf;
