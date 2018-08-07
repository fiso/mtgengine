"use strict";
const Constants = require ("../../../Constants");
const CaptainLanneryStormBase = require("../setXLN/CaptainLanneryStorm");

class CaptainLanneryStorm extends CaptainLanneryStormBase {
  constructor (game) {
    super(game, "Captain Lannery Storm", "Ixalan Promos", "PXLN");
  }
}

module.exports = CaptainLanneryStorm;
