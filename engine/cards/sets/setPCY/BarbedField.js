"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedField extends Card {
  constructor(game) {
    super(game, "Barbed Field", "Prophecy", "PCY");
  }
}

module.exports = BarbedField;
