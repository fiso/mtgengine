"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor (game) {
    super(game, "Tranquil Thicket", "Onslaught", "ONS");
  }
}

module.exports = TranquilThicket;
