"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuilledWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Quilled Wolf", "Shadows over Innistrad", "SOI");
  }
}

module.exports = QuilledWolf;
