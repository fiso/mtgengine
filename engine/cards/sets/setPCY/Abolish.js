"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbolishBase = require("../setDDF/Abolish.js");

class Abolish extends AbolishBase {
  constructor(game) {
    super(game, "Abolish", "Prophecy", "PCY");
  }
}

module.exports = Abolish;
