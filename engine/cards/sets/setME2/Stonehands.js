"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StonehandsBase = require("../setICE/Stonehands.js");

class Stonehands extends StonehandsBase {
  constructor(game) {
    super(game, "Stonehands", "Masters Edition II", "ME2");
  }
}

module.exports = Stonehands;
