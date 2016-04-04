"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadwatersBase = require("../setAVR/Dreadwaters.js");

class Dreadwaters extends DreadwatersBase {
  constructor(game) {
    super(game, "Dreadwaters", "Magic Origins", "ORI");
  }
}

module.exports = Dreadwaters;
