"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FissureBase = require("../set4ED/Fissure.js");

class Fissure extends FissureBase {
  constructor(game) {
    super(game, "Fissure", "The Dark", "DRK");
  }
}

module.exports = Fissure;
