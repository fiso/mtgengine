"use strict";
const Constants = require ("../../../Constants");
const KrenkosCommandBase = require("../setDDT/KrenkosCommand");

class KrenkosCommand extends KrenkosCommandBase {
  constructor (game) {
    super(game, "Krenko's Command", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KrenkosCommand;
