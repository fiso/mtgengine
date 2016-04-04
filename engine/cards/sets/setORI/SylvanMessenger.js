"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanMessengerBase = require("../setAPC/SylvanMessenger.js");

class SylvanMessenger extends SylvanMessengerBase {
  constructor(game) {
    super(game, "Sylvan Messenger", "Magic Origins", "ORI");
  }
}

module.exports = SylvanMessenger;
