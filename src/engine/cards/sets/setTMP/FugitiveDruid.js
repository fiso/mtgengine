"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FugitiveDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Fugitive Druid", "Tempest", "TMP");
  }
}

module.exports = FugitiveDruid;
