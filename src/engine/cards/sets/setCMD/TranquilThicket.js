"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setC18/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor (game) {
    super(game, "Tranquil Thicket", "Commander 2011", "CMD");
  }
}

module.exports = TranquilThicket;
