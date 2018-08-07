"use strict";
const Constants = require ("../../../Constants");
const WerebearBase = require("../setEMA/Werebear");

class Werebear extends WerebearBase {
  constructor (game) {
    super(game, "Werebear", "Odyssey", "ODY");
  }
}

module.exports = Werebear;
