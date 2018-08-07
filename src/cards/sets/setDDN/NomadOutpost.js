"use strict";
const Constants = require ("../../../Constants");
const NomadOutpostBase = require("../setC17/NomadOutpost");

class NomadOutpost extends NomadOutpostBase {
  constructor (game) {
    super(game, "Nomad Outpost", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = NomadOutpost;
