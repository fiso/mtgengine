"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomWingsBase = require("../setBOK/PhantomWings.js");

class PhantomWings extends PhantomWingsBase {
  constructor(game) {
    super(game, "Phantom Wings", "Weatherlight", "WTH");
  }
}

module.exports = PhantomWings;
