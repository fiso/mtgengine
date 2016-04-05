"use strict";
const Constants = require ("../../../Constants");
const WarMammothBase = require("../setCED/WarMammoth");

class WarMammoth extends WarMammothBase {
  constructor(game) {
    super(game, "War Mammoth", "Unlimited Edition", "2ED");
  }
}

module.exports = WarMammoth;
