"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RazorjawOniBase = require("../setCMD/RazorjawOni.js");

class RazorjawOni extends RazorjawOniBase {
  constructor(game) {
    super(game, "Razorjaw Oni", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RazorjawOni;
