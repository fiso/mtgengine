"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiteBase = require("../setDDH/Spite.js");

class Spite extends SpiteBase {
  constructor(game) {
    super(game, "Spite", "Invasion", "INV");
  }
}

module.exports = Spite;
