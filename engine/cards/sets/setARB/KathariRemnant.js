"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KathariRemnant extends Card {
  constructor(game) {
    super(game, "Kathari Remnant", "Alara Reborn", "ARB");
  }
}

module.exports = KathariRemnant;
