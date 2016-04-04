"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistformShrieker extends Card {
  constructor(game) {
    super(game, "Mistform Shrieker", "Onslaught", "ONS");
  }
}

module.exports = MistformShrieker;
