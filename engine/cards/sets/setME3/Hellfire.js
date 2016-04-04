"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellfireBase = require("../setLEG/Hellfire.js");

class Hellfire extends HellfireBase {
  constructor(game) {
    super(game, "Hellfire", "Masters Edition III", "ME3");
  }
}

module.exports = Hellfire;
