"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElementalAppeal extends Card {
  constructor(game) {
    super(game, "Elemental Appeal", "Zendikar", "ZEN");
  }
}

module.exports = ElementalAppeal;
