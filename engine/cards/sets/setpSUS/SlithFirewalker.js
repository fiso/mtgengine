"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlithFirewalkerBase = require("../setDD3_JVC/SlithFirewalker.js");

class SlithFirewalker extends SlithFirewalkerBase {
  constructor(game) {
    super(game, "Slith Firewalker", "Super Series", "pSUS");
  }
}

module.exports = SlithFirewalker;
