"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FallenAngelBase = require("../setBTD/FallenAngel.js");

class FallenAngel extends FallenAngelBase {
  constructor(game) {
    super(game, "Fallen Angel", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FallenAngel;
