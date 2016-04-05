"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MayorofAvabruck extends UnimplementedCard {
  constructor(game) {
    super(game, "Mayor of Avabruck", "Innistrad", "ISD");
  }
}

module.exports = MayorofAvabruck;
