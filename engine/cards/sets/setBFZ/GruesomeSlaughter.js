"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruesomeSlaughter extends UnimplementedCard {
  constructor(game) {
    super(game, "Gruesome Slaughter", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GruesomeSlaughter;
