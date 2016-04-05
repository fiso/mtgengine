"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrapbasket extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrapbasket", "Shadowmoor", "SHM");
  }
}

module.exports = Scrapbasket;
