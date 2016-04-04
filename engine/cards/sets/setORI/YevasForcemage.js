"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YevasForcemageBase = require("../setM13/YevasForcemage.js");

class YevasForcemage extends YevasForcemageBase {
  constructor(game) {
    super(game, "Yeva's Forcemage", "Magic Origins", "ORI");
  }
}

module.exports = YevasForcemage;
