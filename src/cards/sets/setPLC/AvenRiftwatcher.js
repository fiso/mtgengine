"use strict";
const Constants = require ("../../../Constants");
const AvenRiftwatcherBase = require("../setEMA/AvenRiftwatcher");

class AvenRiftwatcher extends AvenRiftwatcherBase {
  constructor (game) {
    super(game, "Aven Riftwatcher", "Planar Chaos", "PLC");
  }
}

module.exports = AvenRiftwatcher;
