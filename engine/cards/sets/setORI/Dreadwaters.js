"use strict";
const Constants = require ("../../../Constants");
const DreadwatersBase = require("../setAVR/Dreadwaters");

class Dreadwaters extends DreadwatersBase {
  constructor(game) {
    super(game, "Dreadwaters", "Magic Origins", "ORI");
  }
}

module.exports = Dreadwaters;
