"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorinLordofInnistradEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorin, Lord of Innistrad Emblem", "Dark Ascension Tokens", "TDKA");
  }
}

module.exports = SorinLordofInnistradEmblem;
