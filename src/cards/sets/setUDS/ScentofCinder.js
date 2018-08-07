"use strict";
const Constants = require ("../../../Constants");
const ScentofCinderBase = require("../setPRM/ScentofCinder");

class ScentofCinder extends ScentofCinderBase {
  constructor (game) {
    super(game, "Scent of Cinder", "Urza's Destiny", "UDS");
  }
}

module.exports = ScentofCinder;
