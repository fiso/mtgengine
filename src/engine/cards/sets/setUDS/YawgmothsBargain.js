"use strict";
const Constants = require ("../../../Constants");
const YawgmothsBargainBase = require("../setVMA/YawgmothsBargain");

class YawgmothsBargain extends YawgmothsBargainBase {
  constructor (game) {
    super(game, "Yawgmoth's Bargain", "Urza's Destiny", "UDS");
  }
}

module.exports = YawgmothsBargain;
