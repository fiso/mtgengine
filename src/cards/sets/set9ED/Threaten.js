"use strict";
const Constants = require ("../../../Constants");
const ThreatenBase = require("../set10E/Threaten");

class Threaten extends ThreatenBase {
  constructor (game) {
    super(game, "Threaten", "Ninth Edition", "9ED");
  }
}

module.exports = Threaten;
