"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FacesofthePast extends UnimplementedCard {
  constructor (game) {
    super(game, "Faces of the Past", "Scourge", "SCG");
  }
}

module.exports = FacesofthePast;
