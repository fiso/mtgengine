"use strict";
const Constants = require ("../../../Constants");
const YawgmothDemonBase = require("../setATQ/YawgmothDemon");

class YawgmothDemon extends YawgmothDemonBase {
  constructor (game) {
    super(game, "Yawgmoth Demon", "Chronicles", "CHR");
  }
}

module.exports = YawgmothDemon;
