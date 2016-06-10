"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuagmireDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Quagmire Druid", "Apocalypse", "APC");
  }
}

module.exports = QuagmireDruid;
