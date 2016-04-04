"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Teleport extends Card {
  constructor(game) {
    super(game, "Teleport", "Chronicles", "CHR");
  }
}

module.exports = Teleport;
