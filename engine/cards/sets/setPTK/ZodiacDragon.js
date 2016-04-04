"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZodiacDragonBase = require("../setME3/ZodiacDragon.js");

class ZodiacDragon extends ZodiacDragonBase {
  constructor(game) {
    super(game, "Zodiac Dragon", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacDragon;
