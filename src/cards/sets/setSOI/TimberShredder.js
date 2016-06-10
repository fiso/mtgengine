"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberShredder extends UnimplementedCard {
  constructor (game) {
    super(game, "Timber Shredder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TimberShredder;
