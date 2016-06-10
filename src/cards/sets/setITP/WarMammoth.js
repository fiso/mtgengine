"use strict";
const Constants = require ("../../../Constants");
const WarMammothBase = require("../setCED/WarMammoth");

class WarMammoth extends WarMammothBase {
  constructor (game) {
    super(game, "War Mammoth", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = WarMammoth;
