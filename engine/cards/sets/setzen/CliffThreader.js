"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CliffThreader extends Card {
  constructor(game) {
    super(game, "Cliff Threader", "Zendikar", "ZEN");
  }
}

module.exports = CliffThreader;
