"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishImpersonators extends Card {
  constructor(game) {
    super(game, "Elvish Impersonators", "Unglued", "UGL");
  }
}

module.exports = ElvishImpersonators;
