"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setCED/Tsunami");

class Tsunami extends TsunamiBase {
  constructor(game) {
    super(game, "Tsunami", "Unlimited Edition", "2ED");
  }
}

module.exports = Tsunami;
