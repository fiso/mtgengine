"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Artist", "Commander 2017", "C17");
  }
}

module.exports = BloodArtist;
