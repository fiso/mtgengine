"use strict";
const Constants = require ("../../../Constants");
const BogRaidersBase = require("../setM11/BogRaiders");

class BogRaiders extends BogRaidersBase {
  constructor(game) {
    super(game, "Bog Raiders", "Portal", "POR");
  }
}

module.exports = BogRaiders;
