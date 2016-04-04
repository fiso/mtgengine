"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OjutaiMonument extends Card {
  constructor(game) {
    super(game, "Ojutai Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaiMonument;
