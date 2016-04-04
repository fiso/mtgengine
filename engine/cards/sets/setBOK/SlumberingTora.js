"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlumberingTora extends Card {
  constructor(game) {
    super(game, "Slumbering Tora", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SlumberingTora;
