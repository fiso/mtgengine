"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FacesofthePast extends Card {
  constructor(game) {
    super(game, "Faces of the Past", "Scourge", "SCG");
  }
}

module.exports = FacesofthePast;
