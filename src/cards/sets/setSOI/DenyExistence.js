"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenyExistence extends UnimplementedCard {
  constructor (game) {
    super(game, "Deny Existence", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DenyExistence;
