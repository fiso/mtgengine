"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RepelIntruders extends UnimplementedCard {
  constructor (game) {
    super(game, "Repel Intruders", "Shadowmoor", "SHM");
  }
}

module.exports = RepelIntruders;
