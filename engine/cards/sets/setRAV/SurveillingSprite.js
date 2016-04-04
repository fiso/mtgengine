"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurveillingSpriteBase = require("../setDDH/SurveillingSprite.js");

class SurveillingSprite extends SurveillingSpriteBase {
  constructor(game) {
    super(game, "Surveilling Sprite", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SurveillingSprite;
