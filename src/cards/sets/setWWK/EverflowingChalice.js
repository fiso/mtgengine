"use strict";
const Constants = require ("../../../Constants");
const EverflowingChaliceBase = require("../setARC/EverflowingChalice");

class EverflowingChalice extends EverflowingChaliceBase {
  constructor (game) {
    super(game, "Everflowing Chalice", "Worldwake", "WWK");
  }
}

module.exports = EverflowingChalice;
