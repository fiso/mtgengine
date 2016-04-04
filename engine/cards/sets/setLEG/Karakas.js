"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarakasBase = require("../setpJGP/Karakas.js");

class Karakas extends KarakasBase {
  constructor(game) {
    super(game, "Karakas", "Legends", "LEG");
  }
}

module.exports = Karakas;
