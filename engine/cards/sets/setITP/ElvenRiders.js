"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvenRidersBase = require("../set6ED/ElvenRiders.js");

class ElvenRiders extends ElvenRidersBase {
  constructor(game) {
    super(game, "Elven Riders", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = ElvenRiders;
