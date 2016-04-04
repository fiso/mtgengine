"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningBlastBase = require("../set6ED/LightningBlast.js");

class LightningBlast extends LightningBlastBase {
  constructor(game) {
    super(game, "Lightning Blast", "Tempest Remastered", "TPR");
  }
}

module.exports = LightningBlast;
