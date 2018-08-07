"use strict";
const Constants = require ("../../../Constants");
const CompulsionBase = require("../setWC03/Compulsion");

class Compulsion extends CompulsionBase {
  constructor (game) {
    super(game, "Compulsion", "Torment", "TOR");
  }
}

module.exports = Compulsion;
