"use strict";
const Constants = require ("../../../Constants");
const UndergrowthChampionBase = require("../setBFZ/UndergrowthChampion");

class UndergrowthChampion extends UndergrowthChampionBase {
  constructor (game) {
    super(game, "Undergrowth Champion", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = UndergrowthChampion;
