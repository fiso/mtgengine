"use strict";
const Constants = require ("../../../Constants");
const HellkiteIgniterBase = require("../setC18/HellkiteIgniter");

class HellkiteIgniter extends HellkiteIgniterBase {
  constructor (game) {
    super(game, "Hellkite Igniter", "Commander 2016", "C16");
  }
}

module.exports = HellkiteIgniter;
