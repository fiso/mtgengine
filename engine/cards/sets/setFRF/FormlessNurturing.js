"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FormlessNurturing extends Card {
  constructor(game) {
    super(game, "Formless Nurturing", "Fate Reforged", "FRF");
  }
}

module.exports = FormlessNurturing;
