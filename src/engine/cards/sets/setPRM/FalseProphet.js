"use strict";
const Constants = require ("../../../Constants");
const FalseProphetBase = require("../setCMD/FalseProphet");

class FalseProphet extends FalseProphetBase {
  constructor (game) {
    super(game, "False Prophet", "Magic Online Promos", "PRM");
  }
}

module.exports = FalseProphet;
