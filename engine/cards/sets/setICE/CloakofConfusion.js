"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloakofConfusionBase = require("../set5ED/CloakofConfusion.js");

class CloakofConfusion extends CloakofConfusionBase {
  constructor(game) {
    super(game, "Cloak of Confusion", "Ice Age", "ICE");
  }
}

module.exports = CloakofConfusion;
