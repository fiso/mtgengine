"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArensonsAura extends UnimplementedCard {
  constructor (game) {
    super(game, "Arenson's Aura", "Fifth Edition", "5ED");
  }
}

module.exports = ArensonsAura;
