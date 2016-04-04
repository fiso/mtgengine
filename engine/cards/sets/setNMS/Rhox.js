"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RhoxBase = require("../set8ED/Rhox.js");

class Rhox extends RhoxBase {
  constructor(game) {
    super(game, "Rhox", "Nemesis", "NMS");
  }
}

module.exports = Rhox;
