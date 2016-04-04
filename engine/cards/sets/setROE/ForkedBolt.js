"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForkedBoltBase = require("../setDDP/ForkedBolt.js");

class ForkedBolt extends ForkedBoltBase {
  constructor(game) {
    super(game, "Forked Bolt", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ForkedBolt;
