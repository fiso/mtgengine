"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cocoon extends Card {
  constructor(game) {
    super(game, "Cocoon", "Chronicles", "CHR");
  }
}

module.exports = Cocoon;
