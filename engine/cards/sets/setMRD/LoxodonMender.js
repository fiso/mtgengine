"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonMender extends Card {
  constructor(game) {
    super(game, "Loxodon Mender", "Mirrodin", "MRD");
  }
}

module.exports = LoxodonMender;
