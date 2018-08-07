"use strict";
const Constants = require ("../../../Constants");
const ResilientKhenraBase = require("../setHOU/ResilientKhenra");

class ResilientKhenra extends ResilientKhenraBase {
  constructor (game) {
    super(game, "Resilient Khenra", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = ResilientKhenra;
