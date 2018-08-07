"use strict";
const Constants = require ("../../../Constants");
const VampiricTutorBase = require("../setJ18/VampiricTutor");

class VampiricTutor extends VampiricTutorBase {
  constructor (game) {
    super(game, "Vampiric Tutor", "Magic Online Promos", "PRM");
  }
}

module.exports = VampiricTutor;
