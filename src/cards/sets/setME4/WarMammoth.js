"use strict";
const Constants = require ("../../../Constants");
const WarMammothBase = require("../setCED/WarMammoth");

class WarMammoth extends WarMammothBase {
  constructor (game) {
    super(game, "War Mammoth", "Masters Edition IV", "ME4");
  }
}

module.exports = WarMammoth;
