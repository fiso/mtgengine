"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HecatombBase = require("../set6ED/Hecatomb.js");

class Hecatomb extends HecatombBase {
  constructor(game) {
    super(game, "Hecatomb", "Ice Age", "ICE");
  }
}

module.exports = Hecatomb;
