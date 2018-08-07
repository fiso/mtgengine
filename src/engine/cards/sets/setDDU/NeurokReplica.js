"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokReplica extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Replica", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = NeurokReplica;
