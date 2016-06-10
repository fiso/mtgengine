"use strict";
const Constants = require ("../../../Constants");
const RetaliatorGriffinBase = require("../setARB/RetaliatorGriffin");

class RetaliatorGriffin extends RetaliatorGriffinBase {
  constructor (game) {
    super(game, "Retaliator Griffin", "Media Inserts", "pMEI");
  }
}

module.exports = RetaliatorGriffin;
