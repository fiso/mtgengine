"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchangelBase = require("../setAVR/Archangel.js");

class Archangel extends ArchangelBase {
  constructor(game) {
    super(game, "Archangel", "Visions", "VIS");
  }
}

module.exports = Archangel;
