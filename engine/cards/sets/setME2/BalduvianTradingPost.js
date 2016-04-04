"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalduvianTradingPostBase = require("../setALL/BalduvianTradingPost.js");

class BalduvianTradingPost extends BalduvianTradingPostBase {
  constructor(game) {
    super(game, "Balduvian Trading Post", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianTradingPost;
