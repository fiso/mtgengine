"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Warden", "Commander 2014", "C14");
  }
}

module.exports = EssenceWarden;
