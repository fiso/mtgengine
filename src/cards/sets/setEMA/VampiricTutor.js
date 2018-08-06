"use strict";
const Constants = require ("../../../Constants");
const VampiricTutorBase = require("../set6ED/VampiricTutor");

class VampiricTutor extends VampiricTutorBase {
  constructor (game) {
    super(game, "Vampiric Tutor", "Eternal Masters", "EMA");
  }
}

module.exports = VampiricTutor;
