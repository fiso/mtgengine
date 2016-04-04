"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DevastationBase = require("../setME4/Devastation.js");

class Devastation extends DevastationBase {
  constructor(game) {
    super(game, "Devastation", "Starter 1999", "S99");
  }
}

module.exports = Devastation;
