"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightmineField extends Card {
  constructor(game) {
    super(game, "Lightmine Field", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LightmineField;
