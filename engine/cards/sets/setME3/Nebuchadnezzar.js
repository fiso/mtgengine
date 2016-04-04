"use strict";
const Constants = require ("../../../Constants");
const NebuchadnezzarBase = require("../setCHR/Nebuchadnezzar");

class Nebuchadnezzar extends NebuchadnezzarBase {
  constructor(game) {
    super(game, "Nebuchadnezzar", "Masters Edition III", "ME3");
  }
}

module.exports = Nebuchadnezzar;
