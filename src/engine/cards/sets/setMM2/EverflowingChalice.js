"use strict";
const Constants = require ("../../../Constants");
const EverflowingChaliceBase = require("../setCM2/EverflowingChalice");

class EverflowingChalice extends EverflowingChaliceBase {
  constructor (game) {
    super(game, "Everflowing Chalice", "Modern Masters 2015", "MM2");
  }
}

module.exports = EverflowingChalice;
