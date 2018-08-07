"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkSalvation extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Salvation", "Eldritch Moon", "EMN");
  }
}

module.exports = DarkSalvation;
