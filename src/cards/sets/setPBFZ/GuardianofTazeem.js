"use strict";
const Constants = require ("../../../Constants");
const GuardianofTazeemBase = require("../setBFZ/GuardianofTazeem");

class GuardianofTazeem extends GuardianofTazeemBase {
  constructor (game) {
    super(game, "Guardian of Tazeem", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = GuardianofTazeem;
