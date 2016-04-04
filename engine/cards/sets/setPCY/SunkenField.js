"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunkenField extends Card {
  constructor(game) {
    super(game, "Sunken Field", "Prophecy", "PCY");
  }
}

module.exports = SunkenField;
