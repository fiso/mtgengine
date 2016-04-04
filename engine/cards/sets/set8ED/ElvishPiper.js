"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishPiper extends Card {
  constructor(game) {
    super(game, "Elvish Piper", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishPiper;
