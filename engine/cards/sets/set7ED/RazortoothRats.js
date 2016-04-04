"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RazortoothRatsBase = require("../set6ED/RazortoothRats.js");

class RazortoothRats extends RazortoothRatsBase {
  constructor(game) {
    super(game, "Razortooth Rats", "Seventh Edition", "7ED");
  }
}

module.exports = RazortoothRats;
