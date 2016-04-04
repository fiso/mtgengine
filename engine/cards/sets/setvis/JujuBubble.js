"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JujuBubble extends Card {
  constructor(game) {
    super(game, "Juju Bubble", "Visions", "VIS");
  }
}

module.exports = JujuBubble;
