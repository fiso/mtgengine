"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindlessNull extends Card {
  constructor(game) {
    super(game, "Mindless Null", "Zendikar", "ZEN");
  }
}

module.exports = MindlessNull;
