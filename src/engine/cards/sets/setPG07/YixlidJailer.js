"use strict";
const Constants = require ("../../../Constants");
const YixlidJailerBase = require("../setFUT/YixlidJailer");

class YixlidJailer extends YixlidJailerBase {
  constructor (game) {
    super(game, "Yixlid Jailer", "Gateway 2007", "PG07");
  }
}

module.exports = YixlidJailer;
