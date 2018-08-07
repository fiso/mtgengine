"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofExtinction extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord of Extinction", "Amonkhet Invocations", "MP2");
  }
}

module.exports = LordofExtinction;
