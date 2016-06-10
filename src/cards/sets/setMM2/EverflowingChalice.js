"use strict";
const Constants = require ("../../../Constants");
const EverflowingChaliceBase = require("../setARC/EverflowingChalice");

class EverflowingChalice extends EverflowingChaliceBase {
  constructor (game) {
    super(game, "Everflowing Chalice", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EverflowingChalice;
