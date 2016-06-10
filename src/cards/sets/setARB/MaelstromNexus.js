"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromNexus extends UnimplementedCard {
  constructor (game) {
    super(game, "Maelstrom Nexus", "Alara Reborn", "ARB");
  }
}

module.exports = MaelstromNexus;
