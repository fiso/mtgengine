"use strict";
const Constants = require ("../../../Constants");
const BalduvianTradingPostBase = require("../setALL/BalduvianTradingPost");

class BalduvianTradingPost extends BalduvianTradingPostBase {
  constructor (game) {
    super(game, "Balduvian Trading Post", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianTradingPost;
