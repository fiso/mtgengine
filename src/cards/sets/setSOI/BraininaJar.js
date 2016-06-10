"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BraininaJar extends UnimplementedCard {
  constructor (game) {
    super(game, "Brain in a Jar", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BraininaJar;
