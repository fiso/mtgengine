"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverruleBase = require("../setDIS/Overrule.js");

class Overrule extends OverruleBase {
  constructor(game) {
    super(game, "Overrule", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Overrule;
