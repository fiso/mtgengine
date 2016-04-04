"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkOffering extends Card {
  constructor(game) {
    super(game, "Dark Offering", "Portal Second Age", "PO2");
  }
}

module.exports = DarkOffering;
