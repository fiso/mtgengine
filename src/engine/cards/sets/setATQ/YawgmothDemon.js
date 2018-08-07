"use strict";
const Constants = require ("../../../Constants");
const YawgmothDemonBase = require("../set9ED/YawgmothDemon");

class YawgmothDemon extends YawgmothDemonBase {
  constructor (game) {
    super(game, "Yawgmoth Demon", "Antiquities", "ATQ");
  }
}

module.exports = YawgmothDemon;
