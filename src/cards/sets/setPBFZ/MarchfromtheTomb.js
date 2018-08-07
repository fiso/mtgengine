"use strict";
const Constants = require ("../../../Constants");
const MarchfromtheTombBase = require("../setBFZ/MarchfromtheTomb");

class MarchfromtheTomb extends MarchfromtheTombBase {
  constructor (game) {
    super(game, "March from the Tomb", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = MarchfromtheTomb;
