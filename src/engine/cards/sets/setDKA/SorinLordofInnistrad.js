"use strict";
const Constants = require ("../../../Constants");
const SorinLordofInnistradBase = require("../setDDK/SorinLordofInnistrad");

class SorinLordofInnistrad extends SorinLordofInnistradBase {
  constructor (game) {
    super(game, "Sorin, Lord of Innistrad", "Dark Ascension", "DKA");
  }
}

module.exports = SorinLordofInnistrad;
