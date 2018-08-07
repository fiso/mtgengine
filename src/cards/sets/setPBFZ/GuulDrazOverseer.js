"use strict";
const Constants = require ("../../../Constants");
const GuulDrazOverseerBase = require("../setBFZ/GuulDrazOverseer");

class GuulDrazOverseer extends GuulDrazOverseerBase {
  constructor (game) {
    super(game, "Guul Draz Overseer", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = GuulDrazOverseer;
