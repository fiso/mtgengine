"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setCED/Tsunami");

class Tsunami extends TsunamiBase {
  constructor (game) {
    super(game, "Tsunami", "Fifth Edition", "5ED");
  }
}

module.exports = Tsunami;
