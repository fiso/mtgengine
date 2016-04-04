"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbyssalGatekeeper extends Card {
  constructor(game) {
    super(game, "Abyssal Gatekeeper", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AbyssalGatekeeper;
