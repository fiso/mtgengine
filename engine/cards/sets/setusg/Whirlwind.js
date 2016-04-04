"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhirlwindBase = require("../setC14/Whirlwind.js");

class Whirlwind extends WhirlwindBase {
  constructor(game) {
    super(game, "Whirlwind", "Urza's Saga", "USG");
  }
}

module.exports = Whirlwind;
