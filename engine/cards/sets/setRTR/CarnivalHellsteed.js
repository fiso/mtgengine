"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarnivalHellsteedBase = require("../setpPRE/CarnivalHellsteed.js");

class CarnivalHellsteed extends CarnivalHellsteedBase {
  constructor(game) {
    super(game, "Carnival Hellsteed", "Return to Ravnica", "RTR");
  }
}

module.exports = CarnivalHellsteed;
