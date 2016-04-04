"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarakasBase = require("../setpJGP/Karakas.js");

class Karakas extends KarakasBase {
  constructor(game) {
    super(game, "Karakas", "Masters Edition III", "ME3");
  }
}

module.exports = Karakas;
