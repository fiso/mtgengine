"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stangg extends Card {
  constructor(game) {
    super(game, "Stangg", "Chronicles", "CHR");
  }
}

module.exports = Stangg;
