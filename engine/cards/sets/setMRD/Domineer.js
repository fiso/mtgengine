"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Domineer extends Card {
  constructor(game) {
    super(game, "Domineer", "Mirrodin", "MRD");
  }
}

module.exports = Domineer;
