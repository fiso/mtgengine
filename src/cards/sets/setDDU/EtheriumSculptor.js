"use strict";
const Constants = require ("../../../Constants");
const EtheriumSculptorBase = require("../setC18/EtheriumSculptor");

class EtheriumSculptor extends EtheriumSculptorBase {
  constructor (game) {
    super(game, "Etherium Sculptor", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = EtheriumSculptor;
