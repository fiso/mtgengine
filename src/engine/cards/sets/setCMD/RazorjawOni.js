"use strict";
const Constants = require ("../../../Constants");
const RazorjawOniBase = require("../setCMA/RazorjawOni");

class RazorjawOni extends RazorjawOniBase {
  constructor (game) {
    super(game, "Razorjaw Oni", "Commander 2011", "CMD");
  }
}

module.exports = RazorjawOni;
