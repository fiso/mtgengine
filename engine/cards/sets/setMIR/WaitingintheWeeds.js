"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaitingintheWeedsBase = require("../set6ED/WaitingintheWeeds.js");

class WaitingintheWeeds extends WaitingintheWeedsBase {
  constructor(game) {
    super(game, "Waiting in the Weeds", "Mirage", "MIR");
  }
}

module.exports = WaitingintheWeeds;
