"use strict";
const Constants = require ("../../../Constants");
const ElvenRidersBase = require("../set6ED/ElvenRiders");

class ElvenRiders extends ElvenRidersBase {
  constructor (game) {
    super(game, "Elven Riders", "Onslaught", "ONS");
  }
}

module.exports = ElvenRiders;
