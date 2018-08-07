"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodOath extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Oath", "World Championship Decks 2001", "WC01");
  }
}

module.exports = BloodOath;
