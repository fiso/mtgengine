"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LingeringTormentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Lingering Tormentor", "Eventide", "EVE");
  }
}

module.exports = LingeringTormentor;
