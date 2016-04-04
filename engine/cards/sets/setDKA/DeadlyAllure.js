"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadlyAllure extends Card {
  constructor(game) {
    super(game, "Deadly Allure", "Dark Ascension", "DKA");
  }
}

module.exports = DeadlyAllure;
