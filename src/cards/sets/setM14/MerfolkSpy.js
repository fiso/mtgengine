"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Spy", "Magic 2014", "M14");
  }
}

module.exports = MerfolkSpy;
