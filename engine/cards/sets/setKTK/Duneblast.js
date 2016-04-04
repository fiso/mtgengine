"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Duneblast extends Card {
  constructor(game) {
    super(game, "Duneblast", "Khans of Tarkir", "KTK");
  }
}

module.exports = Duneblast;
