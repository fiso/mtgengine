"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OblivionSowerBase = require("../setBFZ/OblivionSower.js");

class OblivionSower extends OblivionSowerBase {
  constructor(game) {
    super(game, "Oblivion Sower", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = OblivionSower;
