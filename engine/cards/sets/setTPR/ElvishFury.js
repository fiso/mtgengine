"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishFuryBase = require("../setTMP/ElvishFury.js");

class ElvishFury extends ElvishFuryBase {
  constructor(game) {
    super(game, "Elvish Fury", "Tempest Remastered", "TPR");
  }
}

module.exports = ElvishFury;
