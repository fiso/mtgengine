"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimianBrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Simian Brawler", "Coldsnap", "CSP");
  }
}

module.exports = SimianBrawler;
