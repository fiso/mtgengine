"use strict";
const Constants = require ("../../../Constants");
const TranquilityBase = require("../setBRB/Tranquility");

class Tranquility extends TranquilityBase {
  constructor (game) {
    super(game, "Tranquility", "International Collector's Edition", "CEI");
  }
}

module.exports = Tranquility;
