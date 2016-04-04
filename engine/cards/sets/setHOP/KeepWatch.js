"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeepWatchBase = require("../setJUD/KeepWatch.js");

class KeepWatch extends KeepWatchBase {
  constructor(game) {
    super(game, "Keep Watch", "Planechase", "HOP");
  }
}

module.exports = KeepWatch;
