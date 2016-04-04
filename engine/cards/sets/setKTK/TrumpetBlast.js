"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrumpetBlast extends Card {
  constructor(game) {
    super(game, "Trumpet Blast", "Khans of Tarkir", "KTK");
  }
}

module.exports = TrumpetBlast;
