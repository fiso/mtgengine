"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CivilizedScholar extends UnimplementedCard {
  constructor(game) {
    super(game, "Civilized Scholar", "Innistrad", "ISD");
  }
}

module.exports = CivilizedScholar;
