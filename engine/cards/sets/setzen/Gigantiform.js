"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gigantiform extends Card {
  constructor(game) {
    super(game, "Gigantiform", "Zendikar", "ZEN");
  }
}

module.exports = Gigantiform;
