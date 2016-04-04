"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YawgmothDemonBase = require("../setATQ/YawgmothDemon.js");

class YawgmothDemon extends YawgmothDemonBase {
  constructor(game) {
    super(game, "Yawgmoth Demon", "Chronicles", "CHR");
  }
}

module.exports = YawgmothDemon;
