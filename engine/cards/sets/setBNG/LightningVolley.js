"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningVolley extends Card {
  constructor(game) {
    super(game, "Lightning Volley", "Born of the Gods", "BNG");
  }
}

module.exports = LightningVolley;
