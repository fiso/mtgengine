"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThraximundarBase = require("../setARB/Thraximundar.js");

class Thraximundar extends ThraximundarBase {
  constructor(game) {
    super(game, "Thraximundar", "Commander 2013 Edition", "C13");
  }
}

module.exports = Thraximundar;
