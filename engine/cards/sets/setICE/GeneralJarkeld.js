"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeneralJarkeld extends Card {
  constructor(game) {
    super(game, "General Jarkeld", "Ice Age", "ICE");
  }
}

module.exports = GeneralJarkeld;
