"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmancipationAngelBase = require("../setAVR/EmancipationAngel.js");

class EmancipationAngel extends EmancipationAngelBase {
  constructor(game) {
    super(game, "Emancipation Angel", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = EmancipationAngel;
