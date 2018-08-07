"use strict";
const Constants = require ("../../../Constants");
const AbyssalSpecterBase = require("../setMM3/AbyssalSpecter");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor (game) {
    super(game, "Abyssal Specter", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = AbyssalSpecter;
