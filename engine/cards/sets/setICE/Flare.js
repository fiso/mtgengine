"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlareBase = require("../set5ED/Flare.js");

class Flare extends FlareBase {
  constructor(game) {
    super(game, "Flare", "Ice Age", "ICE");
  }
}

module.exports = Flare;
