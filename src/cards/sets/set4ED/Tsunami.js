"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setCED/Tsunami");

class Tsunami extends TsunamiBase {
  constructor (game) {
    super(game, "Tsunami", "Fourth Edition", "4ED");
  }
}

module.exports = Tsunami;
