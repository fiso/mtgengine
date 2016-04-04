"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoxfireBase = require("../set5ED/Foxfire.js");

class Foxfire extends FoxfireBase {
  constructor(game) {
    super(game, "Foxfire", "Ice Age", "ICE");
  }
}

module.exports = Foxfire;
