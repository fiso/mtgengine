"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloakofConfusionBase = require("../set5ED/CloakofConfusion.js");

class CloakofConfusion extends CloakofConfusionBase {
  constructor(game) {
    super(game, "Cloak of Confusion", "Masters Edition II", "ME2");
  }
}

module.exports = CloakofConfusion;
