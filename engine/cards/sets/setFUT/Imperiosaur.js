"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Imperiosaur extends Card {
  constructor(game) {
    super(game, "Imperiosaur", "Future Sight", "FUT");
  }
}

module.exports = Imperiosaur;
