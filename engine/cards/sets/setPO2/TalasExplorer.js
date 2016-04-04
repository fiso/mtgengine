"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalasExplorer extends Card {
  constructor(game) {
    super(game, "Talas Explorer", "Portal Second Age", "PO2");
  }
}

module.exports = TalasExplorer;
