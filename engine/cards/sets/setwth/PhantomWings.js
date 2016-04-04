"use strict";
const Constants = require ("../../../Constants");
const PhantomWingsBase = require("../setBOK/PhantomWings");

class PhantomWings extends PhantomWingsBase {
  constructor(game) {
    super(game, "Phantom Wings", "Weatherlight", "WTH");
  }
}

module.exports = PhantomWings;
