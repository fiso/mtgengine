"use strict";
const Constants = require ("../../../Constants");
const DisharmonyBase = require("../setME3/Disharmony");

class Disharmony extends DisharmonyBase {
  constructor (game) {
    super(game, "Disharmony", "Legends", "LEG");
  }
}

module.exports = Disharmony;
