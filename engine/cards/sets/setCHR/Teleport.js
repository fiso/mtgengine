"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Teleport extends UnimplementedCard {
  constructor(game) {
    super(game, "Teleport", "Chronicles", "CHR");
  }
}

module.exports = Teleport;
