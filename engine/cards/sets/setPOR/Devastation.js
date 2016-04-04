"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DevastationBase = require("../setME4/Devastation.js");

class Devastation extends DevastationBase {
  constructor(game) {
    super(game, "Devastation", "Portal", "POR");
  }
}

module.exports = Devastation;
