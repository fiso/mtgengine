"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElderDruidBase = require("../set6ED/ElderDruid.js");

class ElderDruid extends ElderDruidBase {
  constructor(game) {
    super(game, "Elder Druid", "Fifth Edition", "5ED");
  }
}

module.exports = ElderDruid;
