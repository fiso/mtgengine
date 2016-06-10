"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicRenewal extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Renewal", "Weatherlight", "WTH");
  }
}

module.exports = AngelicRenewal;
