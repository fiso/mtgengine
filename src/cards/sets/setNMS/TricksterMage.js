"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TricksterMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Trickster Mage", "Nemesis", "NMS");
  }
}

module.exports = TricksterMage;
