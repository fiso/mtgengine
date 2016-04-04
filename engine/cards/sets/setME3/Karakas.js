"use strict";
const Constants = require ("../../../Constants");
const KarakasBase = require("../setpJGP/Karakas");

class Karakas extends KarakasBase {
  constructor(game) {
    super(game, "Karakas", "Masters Edition III", "ME3");
  }
}

module.exports = Karakas;
