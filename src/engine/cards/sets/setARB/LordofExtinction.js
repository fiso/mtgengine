"use strict";
const Constants = require ("../../../Constants");
const LordofExtinctionBase = require("../setMP2/LordofExtinction");

class LordofExtinction extends LordofExtinctionBase {
  constructor (game) {
    super(game, "Lord of Extinction", "Alara Reborn", "ARB");
  }
}

module.exports = LordofExtinction;
