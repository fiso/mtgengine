"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampiricTutorBase = require("../set6ED/VampiricTutor.js");

class VampiricTutor extends VampiricTutorBase {
  constructor(game) {
    super(game, "Vampiric Tutor", "Visions", "VIS");
  }
}

module.exports = VampiricTutor;
