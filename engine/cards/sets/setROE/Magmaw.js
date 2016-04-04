"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmawBase = require("../setDDP/Magmaw.js");

class Magmaw extends MagmawBase {
  constructor(game) {
    super(game, "Magmaw", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Magmaw;
