"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CruelTutor extends Card {
  constructor(game) {
    super(game, "Cruel Tutor", "Portal", "POR");
  }
}

module.exports = CruelTutor;
