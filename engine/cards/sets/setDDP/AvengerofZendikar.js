"use strict";
const Constants = require ("../../../Constants");
const AvengerofZendikarBase = require("../setC13/AvengerofZendikar");

class AvengerofZendikar extends AvengerofZendikarBase {
  constructor(game) {
    super(game, "Avenger of Zendikar", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = AvengerofZendikar;
