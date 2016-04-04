"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SqueesToy extends Card {
  constructor(game) {
    super(game, "Squee's Toy", "Tempest", "TMP");
  }
}

module.exports = SqueesToy;
