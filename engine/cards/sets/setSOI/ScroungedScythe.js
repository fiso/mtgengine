"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScroungedScythe extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrounged Scythe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ScroungedScythe;
