"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfernoBase = require("../set6ED/Inferno.js");

class Inferno extends InfernoBase {
  constructor(game) {
    super(game, "Inferno", "The Dark", "DRK");
  }
}

module.exports = Inferno;
