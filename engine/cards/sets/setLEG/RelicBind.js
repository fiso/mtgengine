"use strict";
const Constants = require ("../../../Constants");
const RelicBindBase = require("../set4ED/RelicBind");

class RelicBind extends RelicBindBase {
  constructor(game) {
    super(game, "Relic Bind", "Legends", "LEG");
  }
}

module.exports = RelicBind;
