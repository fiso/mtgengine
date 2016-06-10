"use strict";
const Constants = require ("../../../Constants");
const WrathofMaritLageBase = require("../set8ED/WrathofMaritLage");

class WrathofMaritLage extends WrathofMaritLageBase {
  constructor (game) {
    super(game, "Wrath of Marit Lage", "Ice Age", "ICE");
  }
}

module.exports = WrathofMaritLage;
