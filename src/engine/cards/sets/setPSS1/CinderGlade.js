"use strict";
const Constants = require ("../../../Constants");
const CinderGladeBase = require("../setBFZ/CinderGlade");

class CinderGlade extends CinderGladeBase {
  constructor (game) {
    super(game, "Cinder Glade", "BFZ Standard Series", "PSS1");
  }
}

module.exports = CinderGlade;
