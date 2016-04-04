"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExorcistBase = require("../setME3/Exorcist.js");

class Exorcist extends ExorcistBase {
  constructor(game) {
    super(game, "Exorcist", "The Dark", "DRK");
  }
}

module.exports = Exorcist;
