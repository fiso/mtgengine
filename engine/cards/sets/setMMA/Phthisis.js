"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhthisisBase = require("../setC13/Phthisis.js");

class Phthisis extends PhthisisBase {
  constructor(game) {
    super(game, "Phthisis", "Modern Masters", "MMA");
  }
}

module.exports = Phthisis;
