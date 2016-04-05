"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MilitantInquisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Militant Inquisitor", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MilitantInquisitor;
