"use strict";
const Constants = require ("../../../Constants");
const YixlidJailerBase = require("../setFUT/YixlidJailer");

class YixlidJailer extends YixlidJailerBase {
  constructor (game) {
    super(game, "Yixlid Jailer", "Magic Online Promos", "PRM");
  }
}

module.exports = YixlidJailer;
