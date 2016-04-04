"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NebuchadnezzarBase = require("../setCHR/Nebuchadnezzar.js");

class Nebuchadnezzar extends NebuchadnezzarBase {
  constructor(game) {
    super(game, "Nebuchadnezzar", "Legends", "LEG");
  }
}

module.exports = Nebuchadnezzar;
