"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DawnbringerCharioteersBase = require("../setJOU/DawnbringerCharioteers.js");

class DawnbringerCharioteers extends DawnbringerCharioteersBase {
  constructor(game) {
    super(game, "Dawnbringer Charioteers", "Prerelease Events", "pPRE");
  }
}

module.exports = DawnbringerCharioteers;
