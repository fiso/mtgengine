"use strict";
const Constants = require ("../../../Constants");
const CinderGladeBase = require("../setBFZ/CinderGlade");

class CinderGlade extends CinderGladeBase {
  constructor (game) {
    super(game, "Cinder Glade", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = CinderGlade;
