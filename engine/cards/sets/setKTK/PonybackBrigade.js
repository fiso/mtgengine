"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PonybackBrigade extends Card {
  constructor(game) {
    super(game, "Ponyback Brigade", "Khans of Tarkir", "KTK");
  }
}

module.exports = PonybackBrigade;
