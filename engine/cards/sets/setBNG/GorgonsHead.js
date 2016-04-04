"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorgonsHead extends Card {
  constructor(game) {
    super(game, "Gorgon's Head", "Born of the Gods", "BNG");
  }
}

module.exports = GorgonsHead;
