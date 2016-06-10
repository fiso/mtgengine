"use strict";
const Constants = require ("../../../Constants");
const TakklemaggotBase = require("../setCHR/Takklemaggot");

class Takklemaggot extends TakklemaggotBase {
  constructor (game) {
    super(game, "Takklemaggot", "Masters Edition III", "ME3");
  }
}

module.exports = Takklemaggot;
