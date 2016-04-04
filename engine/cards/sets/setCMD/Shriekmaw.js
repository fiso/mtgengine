"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw.js");

class Shriekmaw extends ShriekmawBase {
  constructor(game) {
    super(game, "Shriekmaw", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Shriekmaw;
