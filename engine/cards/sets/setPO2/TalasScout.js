"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalasScout extends Card {
  constructor(game) {
    super(game, "Talas Scout", "Portal Second Age", "PO2");
  }
}

module.exports = TalasScout;
