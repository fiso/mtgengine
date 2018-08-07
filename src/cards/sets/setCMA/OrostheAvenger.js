"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrostheAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Oros, the Avenger", "Commander Anthology", "CMA");
  }
}

module.exports = OrostheAvenger;
