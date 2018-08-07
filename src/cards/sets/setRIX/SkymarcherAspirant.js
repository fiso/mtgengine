"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkymarcherAspirant extends UnimplementedCard {
  constructor (game) {
    super(game, "Skymarcher Aspirant", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SkymarcherAspirant;
