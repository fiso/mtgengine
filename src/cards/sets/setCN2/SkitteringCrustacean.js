"use strict";
const Constants = require ("../../../Constants");
const SkitteringCrustaceanBase = require("../setPZ2/SkitteringCrustacean");

class SkitteringCrustacean extends SkitteringCrustaceanBase {
  constructor (game) {
    super(game, "Skittering Crustacean", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SkitteringCrustacean;
