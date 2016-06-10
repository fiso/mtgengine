"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Galvanic Blast", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GalvanicBlast;
