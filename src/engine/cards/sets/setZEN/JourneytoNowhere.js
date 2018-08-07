"use strict";
const Constants = require ("../../../Constants");
const JourneytoNowhereBase = require("../setCMD/JourneytoNowhere");

class JourneytoNowhere extends JourneytoNowhereBase {
  constructor (game) {
    super(game, "Journey to Nowhere", "Zendikar", "ZEN");
  }
}

module.exports = JourneytoNowhere;
