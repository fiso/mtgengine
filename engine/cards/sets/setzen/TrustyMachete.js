"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrustyMachete extends Card {
  constructor(game) {
    super(game, "Trusty Machete", "Zendikar", "ZEN");
  }
}

module.exports = TrustyMachete;
