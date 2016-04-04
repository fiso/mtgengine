"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disarm extends Card {
  constructor(game) {
    super(game, "Disarm", "Mirrodin", "MRD");
  }
}

module.exports = Disarm;
