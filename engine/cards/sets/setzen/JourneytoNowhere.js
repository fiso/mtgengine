"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JourneytoNowhereBase = require("../setDDF/JourneytoNowhere.js");

class JourneytoNowhere extends JourneytoNowhereBase {
  constructor(game) {
    super(game, "Journey to Nowhere", "Zendikar", "ZEN");
  }
}

module.exports = JourneytoNowhere;
