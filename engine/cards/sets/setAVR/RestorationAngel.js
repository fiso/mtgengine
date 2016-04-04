"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestorationAngel extends Card {
  constructor(game) {
    super(game, "Restoration Angel", "Avacyn Restored", "AVR");
  }
}

module.exports = RestorationAngel;
