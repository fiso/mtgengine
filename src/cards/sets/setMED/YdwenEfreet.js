"use strict";
const Constants = require ("../../../Constants");
const YdwenEfreetBase = require("../setARN/YdwenEfreet");

class YdwenEfreet extends YdwenEfreetBase {
  constructor(game) {
    super(game, "Ydwen Efreet", "Masters Edition", "MED");
  }
}

module.exports = YdwenEfreet;
