"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogRatsBase = require("../setCHR/BogRats.js");

class BogRats extends BogRatsBase {
  constructor(game) {
    super(game, "Bog Rats", "The Dark", "DRK");
  }
}

module.exports = BogRats;
