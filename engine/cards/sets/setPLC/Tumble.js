"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TumbleBase = require("../setC13/Tumble.js");

class Tumble extends TumbleBase {
  constructor(game) {
    super(game, "Tumble", "Planar Chaos", "PLC");
  }
}

module.exports = Tumble;
