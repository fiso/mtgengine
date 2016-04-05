"use strict";
const Constants = require ("../../../Constants");
const FaerieMechanistBase = require("../setCON/FaerieMechanist");

class FaerieMechanist extends FaerieMechanistBase {
  constructor(game) {
    super(game, "Faerie Mechanist", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = FaerieMechanist;
