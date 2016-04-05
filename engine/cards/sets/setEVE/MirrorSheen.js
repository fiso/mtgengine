"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorSheen extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Sheen", "Eventide", "EVE");
  }
}

module.exports = MirrorSheen;
