"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NahiritheHarbinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Nahiri, the Harbinger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NahiritheHarbinger;
