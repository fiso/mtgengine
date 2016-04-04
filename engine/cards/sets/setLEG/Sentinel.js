"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SentinelBase = require("../setCHR/Sentinel.js");

class Sentinel extends SentinelBase {
  constructor(game) {
    super(game, "Sentinel", "Legends", "LEG");
  }
}

module.exports = Sentinel;
