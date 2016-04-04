"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireDrakeBase = require("../setCHR/FireDrake.js");

class FireDrake extends FireDrakeBase {
  constructor(game) {
    super(game, "Fire Drake", "Masters Edition III", "ME3");
  }
}

module.exports = FireDrake;
