"use strict";
const Constants = require ("../../../Constants");
const TranquilityBase = require("../setBRB/Tranquility");

class Tranquility extends TranquilityBase {
  constructor (game) {
    super(game, "Tranquility", "Seventh Edition", "7ED");
  }
}

module.exports = Tranquility;
