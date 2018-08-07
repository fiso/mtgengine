"use strict";
const Constants = require ("../../../Constants");
const FireDrakeBase = require("../setME3/FireDrake");

class FireDrake extends FireDrakeBase {
  constructor (game) {
    super(game, "Fire Drake", "The Dark", "DRK");
  }
}

module.exports = FireDrake;
