"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishRangerBase = require("../setALL/ElvishRanger.js");

class ElvishRanger extends ElvishRangerBase {
  constructor(game) {
    super(game, "Elvish Ranger", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishRanger;
