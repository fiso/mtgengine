"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor (game) {
    super(game, "Tranquil Thicket", "Commander 2014", "C14");
  }
}

module.exports = TranquilThicket;
