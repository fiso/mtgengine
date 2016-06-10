"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummitProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Summit Prowler", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SummitProwler;
