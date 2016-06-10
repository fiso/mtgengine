"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KothophedSoulHoarder extends UnimplementedCard {
  constructor (game) {
    super(game, "Kothophed, Soul Hoarder", "Magic Origins", "ORI");
  }
}

module.exports = KothophedSoulHoarder;
