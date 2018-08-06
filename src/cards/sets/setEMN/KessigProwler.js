"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KessigProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Kessig Prowler", "Eldritch Moon", "EMN");
  }
}

module.exports = KessigProwler;
