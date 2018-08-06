"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RepeltheAbominable extends UnimplementedCard {
  constructor (game) {
    super(game, "Repel the Abominable", "Eldritch Moon", "EMN");
  }
}

module.exports = RepeltheAbominable;
