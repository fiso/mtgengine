"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HipparionBase = require("../set5ED/Hipparion.js");

class Hipparion extends HipparionBase {
  constructor(game) {
    super(game, "Hipparion", "Ice Age", "ICE");
  }
}

module.exports = Hipparion;
