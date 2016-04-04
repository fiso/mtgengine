"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScentofCinderBase = require("../setpMEI/ScentofCinder.js");

class ScentofCinder extends ScentofCinderBase {
  constructor(game) {
    super(game, "Scent of Cinder", "Urza's Destiny", "UDS");
  }
}

module.exports = ScentofCinder;
