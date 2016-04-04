"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Illusionary Presence", "Ice Age", "ICE");
  }
}

module.exports = IllusionaryPresence;
