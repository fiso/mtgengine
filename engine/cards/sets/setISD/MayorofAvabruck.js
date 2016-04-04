"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MayorofAvabruck extends Card {
  constructor(game) {
    super(game, "Mayor of Avabruck", "Innistrad", "ISD");
  }
}

module.exports = MayorofAvabruck;
