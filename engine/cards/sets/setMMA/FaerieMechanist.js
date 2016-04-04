"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaerieMechanistBase = require("../setCON/FaerieMechanist.js");

class FaerieMechanist extends FaerieMechanistBase {
  constructor(game) {
    super(game, "Faerie Mechanist", "Modern Masters", "MMA");
  }
}

module.exports = FaerieMechanist;
