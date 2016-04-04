"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindFuneral extends Card {
  constructor(game) {
    super(game, "Mind Funeral", "Alara Reborn", "ARB");
  }
}

module.exports = MindFuneral;
