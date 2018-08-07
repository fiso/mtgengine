"use strict";
const Constants = require ("../../../Constants");
const SpiderBase = require("../setTCMA/Spider");

class Spider extends SpiderBase {
  constructor (game) {
    super(game, "Spider", "Shadowmoor Tokens", "TSHM");
  }
}

module.exports = Spider;
