"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwilightShepherdBase = require("../setC14/TwilightShepherd.js");

class TwilightShepherd extends TwilightShepherdBase {
  constructor(game) {
    super(game, "Twilight Shepherd", "Shadowmoor", "SHM");
  }
}

module.exports = TwilightShepherd;
