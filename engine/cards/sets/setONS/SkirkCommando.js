"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirkCommandoBase = require("../setARC/SkirkCommando.js");

class SkirkCommando extends SkirkCommandoBase {
  constructor(game) {
    super(game, "Skirk Commando", "Onslaught", "ONS");
  }
}

module.exports = SkirkCommando;
