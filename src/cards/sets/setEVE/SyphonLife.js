"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyphonLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Syphon Life", "Eventide", "EVE");
  }
}

module.exports = SyphonLife;
