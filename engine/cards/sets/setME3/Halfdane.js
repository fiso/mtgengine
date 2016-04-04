"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HalfdaneBase = require("../setLEG/Halfdane.js");

class Halfdane extends HalfdaneBase {
  constructor(game) {
    super(game, "Halfdane", "Masters Edition III", "ME3");
  }
}

module.exports = Halfdane;
