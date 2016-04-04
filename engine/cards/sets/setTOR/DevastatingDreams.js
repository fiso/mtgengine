"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevastatingDreams extends Card {
  constructor(game) {
    super(game, "Devastating Dreams", "Torment", "TOR");
  }
}

module.exports = DevastatingDreams;
