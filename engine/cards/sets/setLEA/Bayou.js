"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BayouBase = require("../setCED/Bayou.js");

class Bayou extends BayouBase {
  constructor(game) {
    super(game, "Bayou", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Bayou;
