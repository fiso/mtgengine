"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorSigilSergeant extends Card {
  constructor(game) {
    super(game, "Mirror-Sigil Sergeant", "Conflux", "CON");
  }
}

module.exports = MirrorSigilSergeant;
