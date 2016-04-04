"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanTutorBase = require("../setME4/SylvanTutor.js");

class SylvanTutor extends SylvanTutorBase {
  constructor(game) {
    super(game, "Sylvan Tutor", "Portal", "POR");
  }
}

module.exports = SylvanTutor;
