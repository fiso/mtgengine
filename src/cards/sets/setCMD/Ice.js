"use strict";
const Constants = require ("../../../Constants");
const IceBase = require("../setAPC/Ice");

class Ice extends IceBase {
  constructor(game) {
    super(game, "Ice", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Ice;
