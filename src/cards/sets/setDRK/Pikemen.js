"use strict";
const Constants = require ("../../../Constants");
const PikemenBase = require("../set5ED/Pikemen");

class Pikemen extends PikemenBase {
  constructor (game) {
    super(game, "Pikemen", "The Dark", "DRK");
  }
}

module.exports = Pikemen;
