"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw.js");

class Shriekmaw extends ShriekmawBase {
  constructor(game) {
    super(game, "Shriekmaw", "Release Events", "pREL");
  }
}

module.exports = Shriekmaw;
