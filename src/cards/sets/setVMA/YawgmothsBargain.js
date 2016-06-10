"use strict";
const Constants = require ("../../../Constants");
const YawgmothsBargainBase = require("../setUDS/YawgmothsBargain");

class YawgmothsBargain extends YawgmothsBargainBase {
  constructor (game) {
    super(game, "Yawgmoth's Bargain", "Vintage Masters", "VMA");
  }
}

module.exports = YawgmothsBargain;
