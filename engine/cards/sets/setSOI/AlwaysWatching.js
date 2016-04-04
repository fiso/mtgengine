"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlwaysWatching extends UnimplementedCard {
  constructor(game) {
    super(game, "Always Watching", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AlwaysWatching;
