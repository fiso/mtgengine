"use strict";
const Constants = require ("../../../Constants");
const CinderGladeBase = require("../setBFZ/CinderGlade");

class CinderGlade extends CinderGladeBase {
  constructor (game) {
    super(game, "Cinder Glade", "Zendikar Expedition", "EXP");
  }
}

module.exports = CinderGlade;
