"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyphonLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Syphon Life", "Modern Masters", "MMA");
  }
}

module.exports = SyphonLife;
