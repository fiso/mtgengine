"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesmericFiendBase = require("../setDDK/MesmericFiend.js");

class MesmericFiend extends MesmericFiendBase {
  constructor(game) {
    super(game, "Mesmeric Fiend", "Torment", "TOR");
  }
}

module.exports = MesmericFiend;
