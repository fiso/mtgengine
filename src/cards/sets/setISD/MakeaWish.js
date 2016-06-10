"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeaWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Make a Wish", "Innistrad", "ISD");
  }
}

module.exports = MakeaWish;
