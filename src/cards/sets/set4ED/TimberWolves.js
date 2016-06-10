"use strict";
const Constants = require ("../../../Constants");
const TimberWolvesBase = require("../setCED/TimberWolves");

class TimberWolves extends TimberWolvesBase {
  constructor (game) {
    super(game, "Timber Wolves", "Fourth Edition", "4ED");
  }
}

module.exports = TimberWolves;
