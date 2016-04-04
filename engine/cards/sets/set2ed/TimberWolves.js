"use strict";
const Constants = require ("../../../Constants");
const TimberWolvesBase = require("../setCED/TimberWolves");

class TimberWolves extends TimberWolvesBase {
  constructor(game) {
    super(game, "Timber Wolves", "Unlimited Edition", "2ED");
  }
}

module.exports = TimberWolves;
