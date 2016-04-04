"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThriveBase = require("../setDIS/Thrive.js");

class Thrive extends ThriveBase {
  constructor(game) {
    super(game, "Thrive", "Prophecy", "PCY");
  }
}

module.exports = Thrive;
