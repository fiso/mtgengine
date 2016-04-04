"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnkleShankerBase = require("../setKTK/AnkleShanker.js");

class AnkleShanker extends AnkleShankerBase {
  constructor(game) {
    super(game, "Ankle Shanker", "Media Inserts", "pMEI");
  }
}

module.exports = AnkleShanker;
