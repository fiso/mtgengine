"use strict";
const Constants = require ("../../../Constants");
const YdwenEfreetBase = require("../setMED/YdwenEfreet");

class YdwenEfreet extends YdwenEfreetBase {
  constructor (game) {
    super(game, "Ydwen Efreet", "Arabian Nights", "ARN");
  }
}

module.exports = YdwenEfreet;
