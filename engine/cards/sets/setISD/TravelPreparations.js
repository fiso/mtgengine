"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TravelPreparations extends Card {
  constructor(game) {
    super(game, "Travel Preparations", "Innistrad", "ISD");
  }
}

module.exports = TravelPreparations;
