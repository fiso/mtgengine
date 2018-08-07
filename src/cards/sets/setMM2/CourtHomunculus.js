"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtHomunculus extends UnimplementedCard {
  constructor (game) {
    super(game, "Court Homunculus", "Modern Masters 2015", "MM2");
  }
}

module.exports = CourtHomunculus;
