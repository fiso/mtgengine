"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchangelBase = require("../setAVR/Archangel.js");

class Archangel extends ArchangelBase {
  constructor(game) {
    super(game, "Archangel", "Portal Second Age", "PO2");
  }
}

module.exports = Archangel;
