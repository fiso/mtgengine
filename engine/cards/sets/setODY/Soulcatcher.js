"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulcatcherBase = require("../setCNS/Soulcatcher.js");

class Soulcatcher extends SoulcatcherBase {
  constructor(game) {
    super(game, "Soulcatcher", "Odyssey", "ODY");
  }
}

module.exports = Soulcatcher;
