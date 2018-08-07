"use strict";
const Constants = require ("../../../Constants");
const SpiderBase = require("../setTCMA/Spider");

class Spider extends SpiderBase {
  constructor (game) {
    super(game, "Spider", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Spider;
