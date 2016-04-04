"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaliceBase = require("../setDDH/Malice.js");

class Malice extends MaliceBase {
  constructor(game) {
    super(game, "Malice", "Invasion", "INV");
  }
}

module.exports = Malice;
