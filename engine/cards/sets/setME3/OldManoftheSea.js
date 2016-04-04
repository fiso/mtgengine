"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OldManoftheSeaBase = require("../setARN/OldManoftheSea.js");

class OldManoftheSea extends OldManoftheSeaBase {
  constructor(game) {
    super(game, "Old Man of the Sea", "Masters Edition III", "ME3");
  }
}

module.exports = OldManoftheSea;
