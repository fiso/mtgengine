"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderGladeBase = require("../setBFZ/CinderGlade.js");

class CinderGlade extends CinderGladeBase {
  constructor(game) {
    super(game, "Cinder Glade", "Zendikar Expedition", "EXP");
  }
}

module.exports = CinderGlade;
