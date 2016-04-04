"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiftwingCloudskate extends UnimplementedCard {
  constructor(game) {
    super(game, "Riftwing Cloudskate", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = RiftwingCloudskate;
