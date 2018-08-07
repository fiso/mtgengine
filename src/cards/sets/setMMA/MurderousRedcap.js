"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderousRedcap extends UnimplementedCard {
  constructor (game) {
    super(game, "Murderous Redcap", "Modern Masters", "MMA");
  }
}

module.exports = MurderousRedcap;
