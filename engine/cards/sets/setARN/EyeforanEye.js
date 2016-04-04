"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EyeforanEye extends Card {
  constructor(game) {
    super(game, "Eye for an Eye", "Arabian Nights", "ARN");
  }
}

module.exports = EyeforanEye;
