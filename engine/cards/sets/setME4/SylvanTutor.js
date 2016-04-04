"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanTutor extends Card {
  constructor(game) {
    super(game, "Sylvan Tutor", "Masters Edition IV", "ME4");
  }
}

module.exports = SylvanTutor;
