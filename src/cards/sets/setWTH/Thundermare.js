"use strict";
const Constants = require ("../../../Constants");
const ThundermareBase = require("../set9ED/Thundermare");

class Thundermare extends ThundermareBase {
  constructor (game) {
    super(game, "Thundermare", "Weatherlight", "WTH");
  }
}

module.exports = Thundermare;
