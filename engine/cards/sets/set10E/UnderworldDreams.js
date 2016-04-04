"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnderworldDreamsBase = require("../setDPA/UnderworldDreams.js");

class UnderworldDreams extends UnderworldDreamsBase {
  constructor(game) {
    super(game, "Underworld Dreams", "Tenth Edition", "10E");
  }
}

module.exports = UnderworldDreams;
