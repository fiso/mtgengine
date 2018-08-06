"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Providence extends UnimplementedCard {
  constructor (game) {
    super(game, "Providence", "Eldritch Moon", "EMN");
  }
}

module.exports = Providence;
