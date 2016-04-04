"use strict";
const Constants = require ("../../../Constants");
const ArchangelBase = require("../setAVR/Archangel");

class Archangel extends ArchangelBase {
  constructor(game) {
    super(game, "Archangel", "Commander 2013 Edition", "C13");
  }
}

module.exports = Archangel;
