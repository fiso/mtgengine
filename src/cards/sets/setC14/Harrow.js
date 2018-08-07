"use strict";
const Constants = require ("../../../Constants");
const HarrowBase = require("../setC18/Harrow");

class Harrow extends HarrowBase {
  constructor (game) {
    super(game, "Harrow", "Commander 2014", "C14");
  }
}

module.exports = Harrow;
