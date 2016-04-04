"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErrandofDuty extends Card {
  constructor(game) {
    super(game, "Errand of Duty", "Alliances", "ALL");
  }
}

module.exports = ErrandofDuty;
