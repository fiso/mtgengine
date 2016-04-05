"use strict";
const Constants = require ("../../../Constants");
const OldManoftheSeaBase = require("../setARN/OldManoftheSea");

class OldManoftheSea extends OldManoftheSeaBase {
  constructor(game) {
    super(game, "Old Man of the Sea", "Masters Edition III", "ME3");
  }
}

module.exports = OldManoftheSea;
