"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KruinOutlaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Kruin Outlaw", "Innistrad", "ISD");
  }
}

module.exports = KruinOutlaw;
