"use strict";
const Constants = require ("../../../Constants");
const TranquilityBase = require("../setBRB/Tranquility");

class Tranquility extends TranquilityBase {
  constructor(game) {
    super(game, "Tranquility", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Tranquility;
