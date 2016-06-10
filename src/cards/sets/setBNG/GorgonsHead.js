"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorgonsHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorgon's Head", "Born of the Gods", "BNG");
  }
}

module.exports = GorgonsHead;
