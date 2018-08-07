"use strict";
const Constants = require ("../../../Constants");
const ThundercloudShamanBase = require("../setCM2/ThundercloudShaman");

class ThundercloudShaman extends ThundercloudShamanBase {
  constructor (game) {
    super(game, "Thundercloud Shaman", "Modern Masters", "MMA");
  }
}

module.exports = ThundercloudShaman;
