"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EagleoftheWatchBase = require("../setJOU/EagleoftheWatch.js");

class EagleoftheWatch extends EagleoftheWatchBase {
  constructor(game) {
    super(game, "Eagle of the Watch", "Magic Origins", "ORI");
  }
}

module.exports = EagleoftheWatch;
