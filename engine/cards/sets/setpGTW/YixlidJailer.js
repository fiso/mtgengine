"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YixlidJailerBase = require("../setFUT/YixlidJailer.js");

class YixlidJailer extends YixlidJailerBase {
  constructor(game) {
    super(game, "Yixlid Jailer", "Gateway", "pGTW");
  }
}

module.exports = YixlidJailer;
