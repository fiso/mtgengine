"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InstigatorGang extends UnimplementedCard {
  constructor (game) {
    super(game, "Instigator Gang", "Innistrad", "ISD");
  }
}

module.exports = InstigatorGang;
