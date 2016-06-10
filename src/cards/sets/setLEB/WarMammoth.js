"use strict";
const Constants = require ("../../../Constants");
const WarMammothBase = require("../setCED/WarMammoth");

class WarMammoth extends WarMammothBase {
  constructor (game) {
    super(game, "War Mammoth", "Limited Edition Beta", "LEB");
  }
}

module.exports = WarMammoth;
