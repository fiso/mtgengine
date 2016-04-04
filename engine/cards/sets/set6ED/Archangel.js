"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchangelBase = require("../setAVR/Archangel.js");

class Archangel extends ArchangelBase {
  constructor(game) {
    super(game, "Archangel", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Archangel;
