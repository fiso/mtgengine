"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HighGroundBase = require("../setEXO/HighGround.js");

class HighGround extends HighGroundBase {
  constructor(game) {
    super(game, "High Ground", "Tenth Edition", "10E");
  }
}

module.exports = HighGround;
