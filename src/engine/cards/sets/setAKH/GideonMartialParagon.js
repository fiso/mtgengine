"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonMartialParagon extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon, Martial Paragon", "Amonkhet", "AKH");
  }
}

module.exports = GideonMartialParagon;
