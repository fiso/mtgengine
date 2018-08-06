"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrillHowler extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrill Howler", "Eldritch Moon", "EMN");
  }
}

module.exports = ShrillHowler;
