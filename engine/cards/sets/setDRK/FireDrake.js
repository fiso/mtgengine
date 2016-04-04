"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireDrakeBase = require("../setCHR/FireDrake.js");

class FireDrake extends FireDrakeBase {
  constructor(game) {
    super(game, "Fire Drake", "The Dark", "DRK");
  }
}

module.exports = FireDrake;
