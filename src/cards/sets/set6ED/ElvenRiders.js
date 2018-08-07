"use strict";
const Constants = require ("../../../Constants");
const ElvenRidersBase = require("../setDPA/ElvenRiders");

class ElvenRiders extends ElvenRidersBase {
  constructor (game) {
    super(game, "Elven Riders", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvenRiders;
