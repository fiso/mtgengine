"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeregrineDrakeBase = require("../setPC2/PeregrineDrake.js");

class PeregrineDrake extends PeregrineDrakeBase {
  constructor(game) {
    super(game, "Peregrine Drake", "Urza's Saga", "USG");
  }
}

module.exports = PeregrineDrake;
