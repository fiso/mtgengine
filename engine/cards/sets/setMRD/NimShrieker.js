"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimShrieker extends Card {
  constructor(game) {
    super(game, "Nim Shrieker", "Mirrodin", "MRD");
  }
}

module.exports = NimShrieker;
