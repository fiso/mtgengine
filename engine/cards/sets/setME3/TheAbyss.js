"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheAbyssBase = require("../setLEG/TheAbyss.js");

class TheAbyss extends TheAbyssBase {
  constructor(game) {
    super(game, "The Abyss", "Masters Edition III", "ME3");
  }
}

module.exports = TheAbyss;
