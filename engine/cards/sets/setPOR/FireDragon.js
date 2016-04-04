"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireDragonBase = require("../setME2/FireDragon.js");

class FireDragon extends FireDragonBase {
  constructor(game) {
    super(game, "Fire Dragon", "Portal", "POR");
  }
}

module.exports = FireDragon;
