"use strict";
const Constants = require ("../../../Constants");
const FaerieMechanistBase = require("../setDDU/FaerieMechanist");

class FaerieMechanist extends FaerieMechanistBase {
  constructor (game) {
    super(game, "Faerie Mechanist", "Modern Masters 2015", "MM2");
  }
}

module.exports = FaerieMechanist;
