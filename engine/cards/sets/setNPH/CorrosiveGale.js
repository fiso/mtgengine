"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorrosiveGale extends Card {
  constructor(game) {
    super(game, "Corrosive Gale", "New Phyrexia", "NPH");
  }
}

module.exports = CorrosiveGale;
