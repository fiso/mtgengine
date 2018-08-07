"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiotDevils extends UnimplementedCard {
  constructor (game) {
    super(game, "Riot Devils", "Innistrad", "ISD");
  }
}

module.exports = RiotDevils;
