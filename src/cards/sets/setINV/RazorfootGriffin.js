"use strict";
const Constants = require ("../../../Constants");
const RazorfootGriffinBase = require("../set8ED/RazorfootGriffin");

class RazorfootGriffin extends RazorfootGriffinBase {
  constructor (game) {
    super(game, "Razorfoot Griffin", "Invasion", "INV");
  }
}

module.exports = RazorfootGriffin;
