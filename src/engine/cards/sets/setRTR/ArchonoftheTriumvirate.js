"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchonoftheTriumvirate extends UnimplementedCard {
  constructor (game) {
    super(game, "Archon of the Triumvirate", "Return to Ravnica", "RTR");
  }
}

module.exports = ArchonoftheTriumvirate;
