"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceBottle extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Bottle", "Tempest", "TMP");
  }
}

module.exports = EssenceBottle;
