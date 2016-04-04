"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RetaliatorGriffinBase = require("../setARB/RetaliatorGriffin.js");

class RetaliatorGriffin extends RetaliatorGriffinBase {
  constructor(game) {
    super(game, "Retaliator Griffin", "Media Inserts", "pMEI");
  }
}

module.exports = RetaliatorGriffin;
