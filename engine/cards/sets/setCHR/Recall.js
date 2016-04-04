"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recall extends Card {
  constructor(game) {
    super(game, "Recall", "Chronicles", "CHR");
  }
}

module.exports = Recall;
