"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GalvanicBlast extends Card {
  constructor(game) {
    super(game, "Galvanic Blast", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GalvanicBlast;
