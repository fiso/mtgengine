"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProclamationofRebirth extends Card {
  constructor(game) {
    super(game, "Proclamation of Rebirth", "Dissension", "DIS");
  }
}

module.exports = ProclamationofRebirth;
