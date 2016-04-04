"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarthogBase = require("../set6ED/Warthog.js");

class Warthog extends WarthogBase {
  constructor(game) {
    super(game, "Warthog", "Visions", "VIS");
  }
}

module.exports = Warthog;
