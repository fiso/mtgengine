"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeweledSpirit extends Card {
  constructor(game) {
    super(game, "Jeweled Spirit", "Prophecy", "PCY");
  }
}

module.exports = JeweledSpirit;
