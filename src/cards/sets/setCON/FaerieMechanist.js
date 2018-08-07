"use strict";
const Constants = require ("../../../Constants");
const FaerieMechanistBase = require("../setDDU/FaerieMechanist");

class FaerieMechanist extends FaerieMechanistBase {
  constructor (game) {
    super(game, "Faerie Mechanist", "Conflux", "CON");
  }
}

module.exports = FaerieMechanist;
