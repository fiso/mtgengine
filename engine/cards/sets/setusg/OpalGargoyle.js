"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalGargoyle extends Card {
  constructor(game) {
    super(game, "Opal Gargoyle", "Urza's Saga", "USG");
  }
}

module.exports = OpalGargoyle;
