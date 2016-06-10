"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dystopia extends UnimplementedCard {
  constructor (game) {
    super(game, "Dystopia", "Alliances", "ALL");
  }
}

module.exports = Dystopia;
