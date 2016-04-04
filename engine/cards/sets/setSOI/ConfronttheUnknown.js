"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConfronttheUnknown extends UnimplementedCard {
  constructor(game) {
    super(game, "Confront the Unknown", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ConfronttheUnknown;
