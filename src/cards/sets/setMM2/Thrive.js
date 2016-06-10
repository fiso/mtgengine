"use strict";
const Constants = require ("../../../Constants");
const ThriveBase = require("../setDIS/Thrive");

class Thrive extends ThriveBase {
  constructor (game) {
    super(game, "Thrive", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thrive;
