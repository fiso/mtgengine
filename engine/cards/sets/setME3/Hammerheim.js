"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HammerheimBase = require("../setLEG/Hammerheim.js");

class Hammerheim extends HammerheimBase {
  constructor(game) {
    super(game, "Hammerheim", "Masters Edition III", "ME3");
  }
}

module.exports = Hammerheim;
