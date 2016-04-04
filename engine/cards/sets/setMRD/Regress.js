"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Regress extends Card {
  constructor(game) {
    super(game, "Regress", "Mirrodin", "MRD");
  }
}

module.exports = Regress;
