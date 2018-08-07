"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrightfulDelusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Frightful Delusion", "Innistrad", "ISD");
  }
}

module.exports = FrightfulDelusion;
