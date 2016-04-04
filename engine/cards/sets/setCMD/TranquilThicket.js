"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor(game) {
    super(game, "Tranquil Thicket", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TranquilThicket;
