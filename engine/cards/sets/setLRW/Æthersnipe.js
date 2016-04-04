"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆthersnipeBase = require("../setDD3_JVC/Æthersnipe.js");

class Æthersnipe extends ÆthersnipeBase {
  constructor(game) {
    super(game, "Æthersnipe", "Lorwyn", "LRW");
  }
}

module.exports = Æthersnipe;
