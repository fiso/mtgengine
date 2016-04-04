"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrizzlyBearsBase = require("../set6ED/GrizzlyBears.js");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor(game) {
    super(game, "Grizzly Bears", "Portal", "POR");
  }
}

module.exports = GrizzlyBears;
