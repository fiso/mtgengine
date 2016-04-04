"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AscendantEvincar extends Card {
  constructor(game) {
    super(game, "Ascendant Evincar", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = AscendantEvincar;
