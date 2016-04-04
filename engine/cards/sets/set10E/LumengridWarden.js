"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LumengridWardenBase = require("../setMRD/LumengridWarden.js");

class LumengridWarden extends LumengridWardenBase {
  constructor(game) {
    super(game, "Lumengrid Warden", "Tenth Edition", "10E");
  }
}

module.exports = LumengridWarden;
