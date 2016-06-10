"use strict";
const Constants = require ("../../../Constants");
const ThundercloudShamanBase = require("../setC15/ThundercloudShaman");

class ThundercloudShaman extends ThundercloudShamanBase {
  constructor (game) {
    super(game, "Thundercloud Shaman", "Modern Masters", "MMA");
  }
}

module.exports = ThundercloudShaman;
