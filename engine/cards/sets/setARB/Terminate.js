"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Terminate extends Card {
  constructor(game) {
    super(game, "Terminate", "Alara Reborn", "ARB");
  }
}

module.exports = Terminate;
