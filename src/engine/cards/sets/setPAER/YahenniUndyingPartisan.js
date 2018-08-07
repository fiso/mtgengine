"use strict";
const Constants = require ("../../../Constants");
const YahenniUndyingPartisanBase = require("../setAER/YahenniUndyingPartisan");

class YahenniUndyingPartisan extends YahenniUndyingPartisanBase {
  constructor (game) {
    super(game, "Yahenni, Undying Partisan", "Aether Revolt Promos", "PAER");
  }
}

module.exports = YahenniUndyingPartisan;
