"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WestvaleAbbey extends UnimplementedCard {
  constructor(game) {
    super(game, "Westvale Abbey", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WestvaleAbbey;
