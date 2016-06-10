"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchersApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Stitcher's Apprentice", "Innistrad", "ISD");
  }
}

module.exports = StitchersApprentice;
