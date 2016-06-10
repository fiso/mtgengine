"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindreaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindreaver", "Born of the Gods", "BNG");
  }
}

module.exports = Mindreaver;
