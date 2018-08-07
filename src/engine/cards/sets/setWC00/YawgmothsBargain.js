"use strict";
const Constants = require ("../../../Constants");
const YawgmothsBargainBase = require("../setVMA/YawgmothsBargain");

class YawgmothsBargain extends YawgmothsBargainBase {
  constructor (game) {
    super(game, "Yawgmoth's Bargain", "World Championship Decks 2000", "WC00");
  }
}

module.exports = YawgmothsBargain;
