"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UmezawasJitte extends UnimplementedCard {
  constructor (game) {
    super(game, "Umezawa's Jitte", "From the Vault: Lore", "V16");
  }
}

module.exports = UmezawasJitte;
