"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistralCharger extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistral Charger", "Dissension", "DIS");
  }
}

module.exports = MistralCharger;
