"use strict";
const Constants = require ("../../../Constants");
const ElvenRidersBase = require("../setDPA/ElvenRiders");

class ElvenRiders extends ElvenRidersBase {
  constructor (game) {
    super(game, "Elven Riders", "Fifth Edition", "5ED");
  }
}

module.exports = ElvenRiders;
