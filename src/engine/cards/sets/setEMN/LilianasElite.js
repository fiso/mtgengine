"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Elite", "Eldritch Moon", "EMN");
  }
}

module.exports = LilianasElite;
