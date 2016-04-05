"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianWarMakers extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian War-Makers", "Alliances", "ALL");
  }
}

module.exports = BalduvianWarMakers;
