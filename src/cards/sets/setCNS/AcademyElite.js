"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Elite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AcademyElite;
