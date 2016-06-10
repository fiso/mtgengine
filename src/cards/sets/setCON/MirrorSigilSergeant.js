"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorSigilSergeant extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror-Sigil Sergeant", "Conflux", "CON");
  }
}

module.exports = MirrorSigilSergeant;
