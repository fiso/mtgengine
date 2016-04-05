"use strict";
const Constants = require ("../../../Constants");
const TranquilityBase = require("../setBRB/Tranquility");

class Tranquility extends TranquilityBase {
  constructor(game) {
    super(game, "Tranquility", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Tranquility;
