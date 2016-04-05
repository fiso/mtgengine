"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicKey extends UnimplementedCard {
  constructor(game) {
    super(game, "Galvanic Key", "Mirrodin", "MRD");
  }
}

module.exports = GalvanicKey;
