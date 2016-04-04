"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReprisalBase = require("../setALL/Reprisal.js");

class Reprisal extends ReprisalBase {
  constructor(game) {
    super(game, "Reprisal", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Reprisal;
