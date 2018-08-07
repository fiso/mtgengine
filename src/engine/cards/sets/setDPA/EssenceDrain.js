"use strict";
const Constants = require ("../../../Constants");
const EssenceDrainBase = require("../setM13/EssenceDrain");

class EssenceDrain extends EssenceDrainBase {
  constructor (game) {
    super(game, "Essence Drain", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = EssenceDrain;
