"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornedSliver extends Card {
  constructor(game) {
    super(game, "Horned Sliver", "Tempest", "TMP");
  }
}

module.exports = HornedSliver;
