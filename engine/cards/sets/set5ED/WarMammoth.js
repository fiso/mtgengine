"use strict";
const Constants = require ("../../../Constants");
const WarMammothBase = require("../setCED/WarMammoth");

class WarMammoth extends WarMammothBase {
  constructor(game) {
    super(game, "War Mammoth", "Fifth Edition", "5ED");
  }
}

module.exports = WarMammoth;
