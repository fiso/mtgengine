"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReprisalBase = require("../setALL/Reprisal.js");

class Reprisal extends ReprisalBase {
  constructor(game) {
    super(game, "Reprisal", "Seventh Edition", "7ED");
  }
}

module.exports = Reprisal;
