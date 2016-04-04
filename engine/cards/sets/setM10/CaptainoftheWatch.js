"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaptainoftheWatchBase = require("../setDDO/CaptainoftheWatch.js");

class CaptainoftheWatch extends CaptainoftheWatchBase {
  constructor(game) {
    super(game, "Captain of the Watch", "Magic 2010", "M10");
  }
}

module.exports = CaptainoftheWatch;
