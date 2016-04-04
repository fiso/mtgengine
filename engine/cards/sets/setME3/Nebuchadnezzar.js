"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NebuchadnezzarBase = require("../setCHR/Nebuchadnezzar.js");

class Nebuchadnezzar extends NebuchadnezzarBase {
  constructor(game) {
    super(game, "Nebuchadnezzar", "Masters Edition III", "ME3");
  }
}

module.exports = Nebuchadnezzar;
