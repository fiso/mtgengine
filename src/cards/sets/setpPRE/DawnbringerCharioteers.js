"use strict";
const Constants = require ("../../../Constants");
const DawnbringerCharioteersBase = require("../setJOU/DawnbringerCharioteers");

class DawnbringerCharioteers extends DawnbringerCharioteersBase {
  constructor(game) {
    super(game, "Dawnbringer Charioteers", "Prerelease Events", "pPRE");
  }
}

module.exports = DawnbringerCharioteers;
