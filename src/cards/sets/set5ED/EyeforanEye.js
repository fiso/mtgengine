"use strict";
const Constants = require ("../../../Constants");
const EyeforanEyeBase = require("../setARN/EyeforanEye");

class EyeforanEye extends EyeforanEyeBase {
  constructor (game) {
    super(game, "Eye for an Eye", "Fifth Edition", "5ED");
  }
}

module.exports = EyeforanEye;
