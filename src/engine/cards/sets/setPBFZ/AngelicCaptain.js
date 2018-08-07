"use strict";
const Constants = require ("../../../Constants");
const AngelicCaptainBase = require("../setBFZ/AngelicCaptain");

class AngelicCaptain extends AngelicCaptainBase {
  constructor (game) {
    super(game, "Angelic Captain", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = AngelicCaptain;
