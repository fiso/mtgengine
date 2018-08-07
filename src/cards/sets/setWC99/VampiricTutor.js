"use strict";
const Constants = require ("../../../Constants");
const VampiricTutorBase = require("../setJ18/VampiricTutor");

class VampiricTutor extends VampiricTutorBase {
  constructor (game) {
    super(game, "Vampiric Tutor", "World Championship Decks 1999", "WC99");
  }
}

module.exports = VampiricTutor;
