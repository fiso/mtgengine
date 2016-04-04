"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EyeforanEyeBase = require("../setARN/EyeforanEye.js");

class EyeforanEye extends EyeforanEyeBase {
  constructor(game) {
    super(game, "Eye for an Eye", "Fifth Edition", "5ED");
  }
}

module.exports = EyeforanEye;
