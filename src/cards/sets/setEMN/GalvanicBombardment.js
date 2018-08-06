"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicBombardment extends UnimplementedCard {
  constructor (game) {
    super(game, "Galvanic Bombardment", "Eldritch Moon", "EMN");
  }
}

module.exports = GalvanicBombardment;
