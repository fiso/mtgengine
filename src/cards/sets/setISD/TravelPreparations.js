"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TravelPreparations extends UnimplementedCard {
  constructor (game) {
    super(game, "Travel Preparations", "Innistrad", "ISD");
  }
}

module.exports = TravelPreparations;
