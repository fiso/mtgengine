"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Revelation extends Card {
  constructor(game) {
    super(game, "Revelation", "Chronicles", "CHR");
  }
}

module.exports = Revelation;
