"use strict";
const Constants = require ("../../../Constants");
const SpiderBase = require("../setTCMA/Spider");

class Spider extends SpiderBase {
  constructor (game) {
    super(game, "Spider", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Spider;
