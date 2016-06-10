"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbyssalGatekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Abyssal Gatekeeper", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AbyssalGatekeeper;
