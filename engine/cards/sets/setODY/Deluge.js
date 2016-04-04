"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DelugeBase = require("../setDPA/Deluge.js");

class Deluge extends DelugeBase {
  constructor(game) {
    super(game, "Deluge", "Odyssey", "ODY");
  }
}

module.exports = Deluge;
