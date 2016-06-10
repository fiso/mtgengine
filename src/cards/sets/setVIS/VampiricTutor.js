"use strict";
const Constants = require ("../../../Constants");
const VampiricTutorBase = require("../set6ED/VampiricTutor");

class VampiricTutor extends VampiricTutorBase {
  constructor (game) {
    super(game, "Vampiric Tutor", "Visions", "VIS");
  }
}

module.exports = VampiricTutor;
