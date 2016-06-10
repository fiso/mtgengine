"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TasteofParadise extends UnimplementedCard {
  constructor (game) {
    super(game, "Taste of Paradise", "Alliances", "ALL");
  }
}

module.exports = TasteofParadise;
