"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor(game) {
    super(game, "Tranquil Thicket", "Commander 2013 Edition", "C13");
  }
}

module.exports = TranquilThicket;
