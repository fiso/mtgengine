"use strict";
const Constants = require ("../../../Constants");
const ThraximundarBase = require("../setARB/Thraximundar");

class Thraximundar extends ThraximundarBase {
  constructor (game) {
    super(game, "Thraximundar", "Commander 2013 Edition", "C13");
  }
}

module.exports = Thraximundar;
