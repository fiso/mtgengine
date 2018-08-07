"use strict";
const Constants = require ("../../../Constants");
const DesecratedTombBase = require("../setM19/DesecratedTomb");

class DesecratedTomb extends DesecratedTombBase {
  constructor (game) {
    super(game, "Desecrated Tomb", "Magic Online Promos", "PRM");
  }
}

module.exports = DesecratedTomb;
