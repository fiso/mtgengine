"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasWorkshop extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's Workshop", "Vintage Masters", "VMA");
  }
}

module.exports = MishrasWorkshop;
