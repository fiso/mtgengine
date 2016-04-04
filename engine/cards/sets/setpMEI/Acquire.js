"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcquireBase = require("../set5DN/Acquire.js");

class Acquire extends AcquireBase {
  constructor(game) {
    super(game, "Acquire", "Media Inserts", "pMEI");
  }
}

module.exports = Acquire;
