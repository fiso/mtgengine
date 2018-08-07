"use strict";
const Constants = require ("../../../Constants");
const VampiricTutorBase = require("../setJ18/VampiricTutor");

class VampiricTutor extends VampiricTutorBase {
  constructor (game) {
    super(game, "Vampiric Tutor", "Judge Gift Cards 2000", "G00");
  }
}

module.exports = VampiricTutor;
