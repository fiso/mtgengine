"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightmareBase = require("../set6ED/Nightmare.js");

class Nightmare extends NightmareBase {
  constructor(game) {
    super(game, "Nightmare", "Tenth Edition", "10E");
  }
}

module.exports = Nightmare;
