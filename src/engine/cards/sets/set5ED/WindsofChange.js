"use strict";
const Constants = require ("../../../Constants");
const WindsofChangeBase = require("../setMED/WindsofChange");

class WindsofChange extends WindsofChangeBase {
  constructor (game) {
    super(game, "Winds of Change", "Fifth Edition", "5ED");
  }
}

module.exports = WindsofChange;
