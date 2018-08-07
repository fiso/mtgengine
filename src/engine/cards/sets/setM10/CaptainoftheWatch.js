"use strict";
const Constants = require ("../../../Constants");
const CaptainoftheWatchBase = require("../setDDO/CaptainoftheWatch");

class CaptainoftheWatch extends CaptainoftheWatchBase {
  constructor (game) {
    super(game, "Captain of the Watch", "Magic 2010", "M10");
  }
}

module.exports = CaptainoftheWatch;
