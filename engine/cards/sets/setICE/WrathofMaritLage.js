"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrathofMaritLageBase = require("../set8ED/WrathofMaritLage.js");

class WrathofMaritLage extends WrathofMaritLageBase {
  constructor(game) {
    super(game, "Wrath of Marit Lage", "Ice Age", "ICE");
  }
}

module.exports = WrathofMaritLage;
