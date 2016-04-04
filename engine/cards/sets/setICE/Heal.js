"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HealBase = require("../set5ED/Heal.js");

class Heal extends HealBase {
  constructor(game) {
    super(game, "Heal", "Ice Age", "ICE");
  }
}

module.exports = Heal;
