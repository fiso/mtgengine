"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrokenVisageBase = require("../set5ED/BrokenVisage.js");

class BrokenVisage extends BrokenVisageBase {
  constructor(game) {
    super(game, "Broken Visage", "Masters Edition II", "ME2");
  }
}

module.exports = BrokenVisage;
