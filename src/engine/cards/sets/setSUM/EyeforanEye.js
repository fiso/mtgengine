"use strict";
const Constants = require ("../../../Constants");
const EyeforanEyeBase = require("../setME4/EyeforanEye");

class EyeforanEye extends EyeforanEyeBase {
  constructor (game) {
    super(game, "Eye for an Eye", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = EyeforanEye;
