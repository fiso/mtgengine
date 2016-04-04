"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelicBindBase = require("../set4ED/RelicBind.js");

class RelicBind extends RelicBindBase {
  constructor(game) {
    super(game, "Relic Bind", "Legends", "LEG");
  }
}

module.exports = RelicBind;
