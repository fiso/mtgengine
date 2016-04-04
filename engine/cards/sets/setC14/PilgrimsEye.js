"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PilgrimsEyeBase = require("../setBFZ/PilgrimsEye.js");

class PilgrimsEye extends PilgrimsEyeBase {
  constructor(game) {
    super(game, "Pilgrim's Eye", "Commander 2014", "C14");
  }
}

module.exports = PilgrimsEye;
