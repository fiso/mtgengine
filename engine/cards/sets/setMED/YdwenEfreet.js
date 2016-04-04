"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YdwenEfreetBase = require("../setARN/YdwenEfreet.js");

class YdwenEfreet extends YdwenEfreetBase {
  constructor(game) {
    super(game, "Ydwen Efreet", "Masters Edition", "MED");
  }
}

module.exports = YdwenEfreet;
