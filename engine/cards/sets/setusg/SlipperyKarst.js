"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlipperyKarstBase = require("../setATH/SlipperyKarst.js");

class SlipperyKarst extends SlipperyKarstBase {
  constructor(game) {
    super(game, "Slippery Karst", "Urza's Saga", "USG");
  }
}

module.exports = SlipperyKarst;
