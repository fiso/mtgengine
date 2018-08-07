"use strict";
const Constants = require ("../../../Constants");
const OblivionSowerBase = require("../setBFZ/OblivionSower");

class OblivionSower extends OblivionSowerBase {
  constructor (game) {
    super(game, "Oblivion Sower", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = OblivionSower;
