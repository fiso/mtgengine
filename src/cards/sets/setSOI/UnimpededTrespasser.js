"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnimpededTrespasser extends UnimplementedCard {
  constructor (game) {
    super(game, "Unimpeded Trespasser", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UnimpededTrespasser;
