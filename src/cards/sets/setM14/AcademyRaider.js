"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Raider", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AcademyRaider;
