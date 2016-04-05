"use strict";
const Constants = require ("../../../Constants");
const ImposingVisageBase = require("../set5ED/ImposingVisage");

class ImposingVisage extends ImposingVisageBase {
  constructor(game) {
    super(game, "Imposing Visage", "Ice Age", "ICE");
  }
}

module.exports = ImposingVisage;
