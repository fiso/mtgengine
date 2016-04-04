"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MadProphet extends Card {
  constructor(game) {
    super(game, "Mad Prophet", "Avacyn Restored", "AVR");
  }
}

module.exports = MadProphet;
