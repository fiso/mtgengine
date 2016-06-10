"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Artist", "Avacyn Restored", "AVR");
  }
}

module.exports = BloodArtist;
