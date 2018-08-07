"use strict";
const Constants = require ("../../../Constants");
const MillikinBase = require("../setEMA/Millikin");

class Millikin extends MillikinBase {
  constructor (game) {
    super(game, "Millikin", "Odyssey", "ODY");
  }
}

module.exports = Millikin;
