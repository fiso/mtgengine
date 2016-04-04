"use strict";
const Constants = require ("../../../Constants");
const MarjhanBase = require("../setHML/Marjhan");

class Marjhan extends MarjhanBase {
  constructor(game) {
    super(game, "Marjhan", "Masters Edition II", "ME2");
  }
}

module.exports = Marjhan;
