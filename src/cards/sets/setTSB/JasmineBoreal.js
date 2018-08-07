"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JasmineBoreal extends UnimplementedCard {
  constructor (game) {
    super(game, "Jasmine Boreal", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = JasmineBoreal;
