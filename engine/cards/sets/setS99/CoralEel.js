"use strict";
const Constants = require ("../../../Constants");
const CoralEelBase = require("../set8ED/CoralEel");

class CoralEel extends CoralEelBase {
  constructor(game) {
    super(game, "Coral Eel", "Starter 1999", "S99");
  }
}

module.exports = CoralEel;
