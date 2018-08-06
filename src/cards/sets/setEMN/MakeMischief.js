"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeMischief extends UnimplementedCard {
  constructor (game) {
    super(game, "Make Mischief", "Eldritch Moon", "EMN");
  }
}

module.exports = MakeMischief;
