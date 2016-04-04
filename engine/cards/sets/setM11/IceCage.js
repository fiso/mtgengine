"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceCageBase = require("../setM10/IceCage.js");

class IceCage extends IceCageBase {
  constructor(game) {
    super(game, "Ice Cage", "Magic 2011", "M11");
  }
}

module.exports = IceCage;
