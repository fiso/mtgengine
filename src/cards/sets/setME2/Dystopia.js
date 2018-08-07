"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dystopia extends UnimplementedCard {
  constructor (game) {
    super(game, "Dystopia", "Masters Edition II", "ME2");
  }
}

module.exports = Dystopia;
