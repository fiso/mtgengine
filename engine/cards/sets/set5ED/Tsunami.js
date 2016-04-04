"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TsunamiBase = require("../setCED/Tsunami.js");

class Tsunami extends TsunamiBase {
  constructor(game) {
    super(game, "Tsunami", "Fifth Edition", "5ED");
  }
}

module.exports = Tsunami;
