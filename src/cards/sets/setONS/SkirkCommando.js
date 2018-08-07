"use strict";
const Constants = require ("../../../Constants");
const SkirkCommandoBase = require("../setA25/SkirkCommando");

class SkirkCommando extends SkirkCommandoBase {
  constructor (game) {
    super(game, "Skirk Commando", "Onslaught", "ONS");
  }
}

module.exports = SkirkCommando;
