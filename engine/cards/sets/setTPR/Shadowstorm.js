"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShadowstormBase = require("../setTMP/Shadowstorm.js");

class Shadowstorm extends ShadowstormBase {
  constructor(game) {
    super(game, "Shadowstorm", "Tempest Remastered", "TPR");
  }
}

module.exports = Shadowstorm;
