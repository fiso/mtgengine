"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptivatingCrew extends UnimplementedCard {
  constructor (game) {
    super(game, "Captivating Crew", "Ixalan", "XLN");
  }
}

module.exports = CaptivatingCrew;
