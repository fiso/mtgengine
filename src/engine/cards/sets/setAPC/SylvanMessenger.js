"use strict";
const Constants = require ("../../../Constants");
const SylvanMessengerBase = require("../setORI/SylvanMessenger");

class SylvanMessenger extends SylvanMessengerBase {
  constructor (game) {
    super(game, "Sylvan Messenger", "Apocalypse", "APC");
  }
}

module.exports = SylvanMessenger;
