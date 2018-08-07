"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiddleheadKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiddlehead Kami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FiddleheadKami;
