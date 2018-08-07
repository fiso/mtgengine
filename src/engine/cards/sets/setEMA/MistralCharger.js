"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistralCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistral Charger", "Eternal Masters", "EMA");
  }
}

module.exports = MistralCharger;
