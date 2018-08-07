"use strict";
const Constants = require ("../../../Constants");
const BalduvianTradingPostBase = require("../setME2/BalduvianTradingPost");

class BalduvianTradingPost extends BalduvianTradingPostBase {
  constructor (game) {
    super(game, "Balduvian Trading Post", "Alliances", "ALL");
  }
}

module.exports = BalduvianTradingPost;
