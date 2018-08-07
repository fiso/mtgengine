"use strict";
const Constants = require ("../../../Constants");
const RetaliatorGriffinBase = require("../setARB/RetaliatorGriffin");

class RetaliatorGriffin extends RetaliatorGriffinBase {
  constructor (game) {
    super(game, "Retaliator Griffin", "Resale Promos", "PRES");
  }
}

module.exports = RetaliatorGriffin;
