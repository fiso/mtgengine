"use strict";
const Constants = require ("../../../Constants");
const SurveillingSpriteBase = require("../setDDH/SurveillingSprite");

class SurveillingSprite extends SurveillingSpriteBase {
  constructor(game) {
    super(game, "Surveilling Sprite", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SurveillingSprite;
