"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter.js");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor(game) {
    super(game, "Abyssal Specter", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AbyssalSpecter;
