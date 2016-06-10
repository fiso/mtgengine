"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsessiveSkinner extends UnimplementedCard {
  constructor (game) {
    super(game, "Obsessive Skinner", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ObsessiveSkinner;
