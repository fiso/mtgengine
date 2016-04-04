"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UlamogtheInfiniteGyreBase = require("../setV11/UlamogtheInfiniteGyre.js");

class UlamogtheInfiniteGyre extends UlamogtheInfiniteGyreBase {
  constructor(game) {
    super(game, "Ulamog, the Infinite Gyre", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UlamogtheInfiniteGyre;
