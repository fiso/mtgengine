"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ServantofTymaret extends UnimplementedCard {
  constructor (game) {
    super(game, "Servant of Tymaret", "Born of the Gods", "BNG");
  }
}

module.exports = ServantofTymaret;
