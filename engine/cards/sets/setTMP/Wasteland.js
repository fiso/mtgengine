"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WastelandBase = require("../setpJGP/Wasteland.js");

class Wasteland extends WastelandBase {
  constructor(game) {
    super(game, "Wasteland", "Tempest", "TMP");
  }
}

module.exports = Wasteland;
