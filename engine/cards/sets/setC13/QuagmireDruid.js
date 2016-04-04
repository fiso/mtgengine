"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuagmireDruidBase = require("../setAPC/QuagmireDruid.js");

class QuagmireDruid extends QuagmireDruidBase {
  constructor(game) {
    super(game, "Quagmire Druid", "Commander 2013 Edition", "C13");
  }
}

module.exports = QuagmireDruid;
