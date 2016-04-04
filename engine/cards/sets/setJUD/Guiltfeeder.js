"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Guiltfeeder extends Card {
  constructor(game) {
    super(game, "Guiltfeeder", "Judgment", "JUD");
  }
}

module.exports = Guiltfeeder;
