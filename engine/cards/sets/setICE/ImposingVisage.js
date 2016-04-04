"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImposingVisageBase = require("../set5ED/ImposingVisage.js");

class ImposingVisage extends ImposingVisageBase {
  constructor(game) {
    super(game, "Imposing Visage", "Ice Age", "ICE");
  }
}

module.exports = ImposingVisage;
