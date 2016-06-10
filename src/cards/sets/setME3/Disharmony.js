"use strict";
const Constants = require ("../../../Constants");
const DisharmonyBase = require("../setLEG/Disharmony");

class Disharmony extends DisharmonyBase {
  constructor (game) {
    super(game, "Disharmony", "Masters Edition III", "ME3");
  }
}

module.exports = Disharmony;
