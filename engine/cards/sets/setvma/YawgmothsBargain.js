"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YawgmothsBargainBase = require("../setUDS/YawgmothsBargain.js");

class YawgmothsBargain extends YawgmothsBargainBase {
  constructor(game) {
    super(game, "Yawgmoth's Bargain", "Vintage Masters", "VMA");
  }
}

module.exports = YawgmothsBargain;
