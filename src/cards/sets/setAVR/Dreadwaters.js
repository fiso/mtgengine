"use strict";
const Constants = require ("../../../Constants");
const DreadwatersBase = require("../setORI/Dreadwaters");

class Dreadwaters extends DreadwatersBase {
  constructor (game) {
    super(game, "Dreadwaters", "Avacyn Restored", "AVR");
  }
}

module.exports = Dreadwaters;
