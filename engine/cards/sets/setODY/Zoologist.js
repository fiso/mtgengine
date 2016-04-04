"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Zoologist extends Card {
  constructor(game) {
    super(game, "Zoologist", "Odyssey", "ODY");
  }
}

module.exports = Zoologist;
