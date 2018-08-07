"use strict";
const Constants = require ("../../../Constants");
const AllyEncampmentBase = require("../setBFZ/AllyEncampment");

class AllyEncampment extends AllyEncampmentBase {
  constructor (game) {
    super(game, "Ally Encampment", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = AllyEncampment;
