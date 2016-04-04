"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaptainoftheWatchBase = require("../setDDO/CaptainoftheWatch.js");

class CaptainoftheWatch extends CaptainoftheWatchBase {
  constructor(game) {
    super(game, "Captain of the Watch", "Magic 2013", "M13");
  }
}

module.exports = CaptainoftheWatch;
