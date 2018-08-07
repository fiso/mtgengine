"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CowlProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Cowl Prowler", "Battlebond", "BBD");
  }
}

module.exports = CowlProwler;
