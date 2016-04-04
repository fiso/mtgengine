"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcGeneral extends Card {
  constructor(game) {
    super(game, "Orc General", "Masters Edition II", "ME2");
  }
}

module.exports = OrcGeneral;
