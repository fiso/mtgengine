"use strict";
const Constants = require ("../../../Constants");
const RazorjawOniBase = require("../setCMA/RazorjawOni");

class RazorjawOni extends RazorjawOniBase {
  constructor (game) {
    super(game, "Razorjaw Oni", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RazorjawOni;
