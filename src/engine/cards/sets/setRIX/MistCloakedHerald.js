"use strict";
const Constants = require ("../../../Constants");
const MistCloakedHeraldBase = require("../setM19/MistCloakedHerald");

class MistCloakedHerald extends MistCloakedHeraldBase {
  constructor (game) {
    super(game, "Mist-Cloaked Herald", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MistCloakedHerald;
