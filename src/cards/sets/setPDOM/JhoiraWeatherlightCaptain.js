"use strict";
const Constants = require ("../../../Constants");
const JhoiraWeatherlightCaptainBase = require("../setDOM/JhoiraWeatherlightCaptain");

class JhoiraWeatherlightCaptain extends JhoiraWeatherlightCaptainBase {
  constructor (game) {
    super(game, "Jhoira, Weatherlight Captain", "Dominaria Promos", "PDOM");
  }
}

module.exports = JhoiraWeatherlightCaptain;
