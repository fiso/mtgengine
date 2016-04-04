"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Repel extends Card {
  constructor(game) {
    super(game, "Repel", "Odyssey", "ODY");
  }
}

module.exports = Repel;
