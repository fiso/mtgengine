"use strict";
const Constants = require ("../../../Constants");
const EmeriaShepherdBase = require("../setBFZ/EmeriaShepherd");

class EmeriaShepherd extends EmeriaShepherdBase {
  constructor (game) {
    super(game, "Emeria Shepherd", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = EmeriaShepherd;
