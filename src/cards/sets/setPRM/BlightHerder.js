"use strict";
const Constants = require ("../../../Constants");
const BlightHerderBase = require("../setBFZ/BlightHerder");

class BlightHerder extends BlightHerderBase {
  constructor (game) {
    super(game, "Blight Herder", "Magic Online Promos", "PRM");
  }
}

module.exports = BlightHerder;
