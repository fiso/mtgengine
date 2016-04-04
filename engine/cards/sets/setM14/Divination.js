"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivinationBase = require("../setBNG/Divination.js");

class Divination extends DivinationBase {
  constructor(game) {
    super(game, "Divination", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Divination;
