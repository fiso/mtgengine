"use strict";
const Constants = require ("../../../Constants");
const SylvanMessengerBase = require("../setAPC/SylvanMessenger");

class SylvanMessenger extends SylvanMessengerBase {
  constructor(game) {
    super(game, "Sylvan Messenger", "Magic Origins", "ORI");
  }
}

module.exports = SylvanMessenger;
