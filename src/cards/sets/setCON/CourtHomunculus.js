"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtHomunculus extends UnimplementedCard {
  constructor (game) {
    super(game, "Court Homunculus", "Conflux", "CON");
  }
}

module.exports = CourtHomunculus;
