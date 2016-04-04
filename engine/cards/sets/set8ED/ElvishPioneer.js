"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishPioneer extends Card {
  constructor(game) {
    super(game, "Elvish Pioneer", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishPioneer;
