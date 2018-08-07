"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzaAcademyHeadmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza, Academy Headmaster", "Unstable", "UST");
  }
}

module.exports = UrzaAcademyHeadmaster;
