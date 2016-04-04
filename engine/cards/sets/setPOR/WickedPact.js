"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WickedPactBase = require("../setME4/WickedPact.js");

class WickedPact extends WickedPactBase {
  constructor(game) {
    super(game, "Wicked Pact", "Portal", "POR");
  }
}

module.exports = WickedPact;
