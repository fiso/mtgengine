"use strict";
const Constants = require ("../../../Constants");
const FireDrakeBase = require("../setCHR/FireDrake");

class FireDrake extends FireDrakeBase {
  constructor(game) {
    super(game, "Fire Drake", "Masters Edition III", "ME3");
  }
}

module.exports = FireDrake;
