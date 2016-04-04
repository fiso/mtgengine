"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LegacysAllure extends Card {
  constructor(game) {
    super(game, "Legacy's Allure", "Tempest", "TMP");
  }
}

module.exports = LegacysAllure;
