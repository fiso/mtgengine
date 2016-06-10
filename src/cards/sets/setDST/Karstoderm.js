"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karstoderm extends UnimplementedCard {
  constructor (game) {
    super(game, "Karstoderm", "Darksteel", "DST");
  }
}

module.exports = Karstoderm;
