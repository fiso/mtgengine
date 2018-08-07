"use strict";
const Constants = require ("../../../Constants");
const HeritageDruidBase = require("../setEMA/HeritageDruid");

class HeritageDruid extends HeritageDruidBase {
  constructor (game) {
    super(game, "Heritage Druid", "Morningtide", "MOR");
  }
}

module.exports = HeritageDruid;
