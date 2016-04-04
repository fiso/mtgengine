"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoldDefense extends Card {
  constructor(game) {
    super(game, "Bold Defense", "Zendikar", "ZEN");
  }
}

module.exports = BoldDefense;
