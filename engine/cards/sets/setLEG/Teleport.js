"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TeleportBase = require("../setCHR/Teleport.js");

class Teleport extends TeleportBase {
  constructor(game) {
    super(game, "Teleport", "Legends", "LEG");
  }
}

module.exports = Teleport;
