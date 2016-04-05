"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ragemonger extends UnimplementedCard {
  constructor(game) {
    super(game, "Ragemonger", "Born of the Gods", "BNG");
  }
}

module.exports = Ragemonger;
