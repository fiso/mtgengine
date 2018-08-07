"use strict";
const Constants = require ("../../../Constants");
const FracturedIdentityBase = require("../setC17/FracturedIdentity");

class FracturedIdentity extends FracturedIdentityBase {
  constructor (game) {
    super(game, "Fractured Identity", "You Make the Cube", "PZ2");
  }
}

module.exports = FracturedIdentity;
