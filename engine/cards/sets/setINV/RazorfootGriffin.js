"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RazorfootGriffinBase = require("../set8ED/RazorfootGriffin.js");

class RazorfootGriffin extends RazorfootGriffinBase {
  constructor(game) {
    super(game, "Razorfoot Griffin", "Invasion", "INV");
  }
}

module.exports = RazorfootGriffin;
