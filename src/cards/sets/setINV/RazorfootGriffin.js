"use strict";
const Constants = require ("../../../Constants");
const RazorfootGriffinBase = require("../setM15/RazorfootGriffin");

class RazorfootGriffin extends RazorfootGriffinBase {
  constructor (game) {
    super(game, "Razorfoot Griffin", "Invasion", "INV");
  }
}

module.exports = RazorfootGriffin;
