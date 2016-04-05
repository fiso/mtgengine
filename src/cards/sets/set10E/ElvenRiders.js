"use strict";
const Constants = require ("../../../Constants");
const ElvenRidersBase = require("../set6ED/ElvenRiders");

class ElvenRiders extends ElvenRidersBase {
  constructor(game) {
    super(game, "Elven Riders", "Tenth Edition", "10E");
  }
}

module.exports = ElvenRiders;
