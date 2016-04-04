"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThriveBase = require("../setDIS/Thrive.js");

class Thrive extends ThriveBase {
  constructor(game) {
    super(game, "Thrive", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thrive;
