"use strict";
const Constants = require ("../../../Constants");
const JarofEyeballsBase = require("../setC13/JarofEyeballs");

class JarofEyeballs extends JarofEyeballsBase {
  constructor (game) {
    super(game, "Jar of Eyeballs", "Dark Ascension", "DKA");
  }
}

module.exports = JarofEyeballs;
