"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DerangedAssistant extends UnimplementedCard {
  constructor (game) {
    super(game, "Deranged Assistant", "Innistrad", "ISD");
  }
}

module.exports = DerangedAssistant;
