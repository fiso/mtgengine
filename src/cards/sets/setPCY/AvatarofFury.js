"use strict";
const Constants = require ("../../../Constants");
const AvatarofFuryBase = require("../setCMD/AvatarofFury");

class AvatarofFury extends AvatarofFuryBase {
  constructor (game) {
    super(game, "Avatar of Fury", "Prophecy", "PCY");
  }
}

module.exports = AvatarofFury;
