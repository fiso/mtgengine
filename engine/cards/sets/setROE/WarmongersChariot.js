"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarmongersChariotBase = require("../setCNS/WarmongersChariot.js");

class WarmongersChariot extends WarmongersChariotBase {
  constructor(game) {
    super(game, "Warmonger's Chariot", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WarmongersChariot;
