"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimberWolvesBase = require("../setCED/TimberWolves.js");

class TimberWolves extends TimberWolvesBase {
  constructor(game) {
    super(game, "Timber Wolves", "Fourth Edition", "4ED");
  }
}

module.exports = TimberWolves;
