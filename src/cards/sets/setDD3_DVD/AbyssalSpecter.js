"use strict";
const Constants = require ("../../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor(game) {
    super(game, "Abyssal Specter", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AbyssalSpecter;
