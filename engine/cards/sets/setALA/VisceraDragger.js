"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VisceraDragger extends Card {
  constructor(game) {
    super(game, "Viscera Dragger", "Shards of Alara", "ALA");
  }
}

module.exports = VisceraDragger;
