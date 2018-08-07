"use strict";
const Constants = require ("../../../Constants");
const VampiricTutorBase = require("../setJ18/VampiricTutor");

class VampiricTutor extends VampiricTutorBase {
  constructor (game) {
    super(game, "Vampiric Tutor", "Vintage Masters", "VMA");
  }
}

module.exports = VampiricTutor;
