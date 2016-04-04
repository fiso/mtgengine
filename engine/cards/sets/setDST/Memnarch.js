"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MemnarchBase = require("../setARC/Memnarch.js");

class Memnarch extends MemnarchBase {
  constructor(game) {
    super(game, "Memnarch", "Darksteel", "DST");
  }
}

module.exports = Memnarch;
