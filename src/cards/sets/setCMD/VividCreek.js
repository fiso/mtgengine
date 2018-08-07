"use strict";
const Constants = require ("../../../Constants");
const VividCreekBase = require("../setC17/VividCreek");

class VividCreek extends VividCreekBase {
  constructor (game) {
    super(game, "Vivid Creek", "Commander 2011", "CMD");
  }
}

module.exports = VividCreek;
