"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromArchangel extends UnimplementedCard {
  constructor(game) {
    super(game, "Maelstrom Archangel", "Conflux", "CON");
  }
}

module.exports = MaelstromArchangel;
