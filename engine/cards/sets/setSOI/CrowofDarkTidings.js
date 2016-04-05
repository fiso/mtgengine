"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrowofDarkTidings extends UnimplementedCard {
  constructor(game) {
    super(game, "Crow of Dark Tidings", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CrowofDarkTidings;
