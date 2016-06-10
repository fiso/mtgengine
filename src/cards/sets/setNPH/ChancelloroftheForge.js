"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChancelloroftheForge extends UnimplementedCard {
  constructor (game) {
    super(game, "Chancellor of the Forge", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheForge;
