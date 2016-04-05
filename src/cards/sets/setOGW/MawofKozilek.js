"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MawofKozilek extends UnimplementedCard {
  constructor(game) {
    super(game, "Maw of Kozilek", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MawofKozilek;
