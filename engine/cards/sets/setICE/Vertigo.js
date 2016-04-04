"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VertigoBase = require("../set6ED/Vertigo.js");

class Vertigo extends VertigoBase {
  constructor(game) {
    super(game, "Vertigo", "Ice Age", "ICE");
  }
}

module.exports = Vertigo;
