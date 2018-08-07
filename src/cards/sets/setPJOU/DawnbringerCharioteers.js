"use strict";
const Constants = require ("../../../Constants");
const DawnbringerCharioteersBase = require("../setJOU/DawnbringerCharioteers");

class DawnbringerCharioteers extends DawnbringerCharioteersBase {
  constructor (game) {
    super(game, "Dawnbringer Charioteers", "Journey into Nyx Promos", "PJOU");
  }
}

module.exports = DawnbringerCharioteers;
