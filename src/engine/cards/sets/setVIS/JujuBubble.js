"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JujuBubble extends UnimplementedCard {
  constructor (game) {
    super(game, "Juju Bubble", "Visions", "VIS");
  }
}

module.exports = JujuBubble;
