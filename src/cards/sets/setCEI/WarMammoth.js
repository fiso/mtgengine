"use strict";
const Constants = require ("../../../Constants");
const WarMammothBase = require("../setCED/WarMammoth");

class WarMammoth extends WarMammothBase {
  constructor(game) {
    super(game, "War Mammoth", "International Collector's Edition", "CEI");
  }
}

module.exports = WarMammoth;
