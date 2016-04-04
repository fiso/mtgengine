"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishAberration extends Card {
  constructor(game) {
    super(game, "Elvish Aberration", "Arena League", "pARL");
  }
}

module.exports = ElvishAberration;
