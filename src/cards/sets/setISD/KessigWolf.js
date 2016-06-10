"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KessigWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Kessig Wolf", "Innistrad", "ISD");
  }
}

module.exports = KessigWolf;
