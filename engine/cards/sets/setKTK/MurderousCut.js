"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderousCut extends Card {
  constructor(game) {
    super(game, "Murderous Cut", "Khans of Tarkir", "KTK");
  }
}

module.exports = MurderousCut;
