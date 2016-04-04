"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlandCemetery extends Card {
  constructor(game) {
    super(game, "Woodland Cemetery", "Innistrad", "ISD");
  }
}

module.exports = WoodlandCemetery;
