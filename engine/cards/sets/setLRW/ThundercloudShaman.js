"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThundercloudShamanBase = require("../setC15/ThundercloudShaman.js");

class ThundercloudShaman extends ThundercloudShamanBase {
  constructor(game) {
    super(game, "Thundercloud Shaman", "Lorwyn", "LRW");
  }
}

module.exports = ThundercloudShaman;
