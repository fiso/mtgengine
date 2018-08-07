"use strict";
const Constants = require ("../../../Constants");
const CloakofConfusionBase = require("../setME2/CloakofConfusion");

class CloakofConfusion extends CloakofConfusionBase {
  constructor (game) {
    super(game, "Cloak of Confusion", "Fifth Edition", "5ED");
  }
}

module.exports = CloakofConfusion;
