"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningVolley extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Volley", "Born of the Gods", "BNG");
  }
}

module.exports = LightningVolley;
