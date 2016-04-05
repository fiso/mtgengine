"use strict";
const Constants = require ("../../../Constants");
const CloakofConfusionBase = require("../set5ED/CloakofConfusion");

class CloakofConfusion extends CloakofConfusionBase {
  constructor(game) {
    super(game, "Cloak of Confusion", "Ice Age", "ICE");
  }
}

module.exports = CloakofConfusion;
