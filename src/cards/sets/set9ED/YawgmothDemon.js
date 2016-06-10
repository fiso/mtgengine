"use strict";
const Constants = require ("../../../Constants");
const YawgmothDemonBase = require("../setATQ/YawgmothDemon");

class YawgmothDemon extends YawgmothDemonBase {
  constructor (game) {
    super(game, "Yawgmoth Demon", "Ninth Edition", "9ED");
  }
}

module.exports = YawgmothDemon;
