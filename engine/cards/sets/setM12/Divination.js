"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivinationBase = require("../setBNG/Divination.js");

class Divination extends DivinationBase {
  constructor(game) {
    super(game, "Divination", "Magic 2012", "M12");
  }
}

module.exports = Divination;
