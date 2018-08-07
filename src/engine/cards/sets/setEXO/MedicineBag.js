"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MedicineBag extends UnimplementedCard {
  constructor (game) {
    super(game, "Medicine Bag", "Exodus", "EXO");
  }
}

module.exports = MedicineBag;
