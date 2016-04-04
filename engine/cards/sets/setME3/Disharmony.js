"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisharmonyBase = require("../setLEG/Disharmony.js");

class Disharmony extends DisharmonyBase {
  constructor(game) {
    super(game, "Disharmony", "Masters Edition III", "ME3");
  }
}

module.exports = Disharmony;
