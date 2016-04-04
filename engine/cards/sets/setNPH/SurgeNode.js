"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurgeNode extends Card {
  constructor(game) {
    super(game, "Surge Node", "New Phyrexia", "NPH");
  }
}

module.exports = SurgeNode;
