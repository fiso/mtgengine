"use strict";
const Constants = require ("../../../Constants");
const OldManoftheSeaBase = require("../setME3/OldManoftheSea");

class OldManoftheSea extends OldManoftheSeaBase {
  constructor (game) {
    super(game, "Old Man of the Sea", "Magic Online Promos", "PRM");
  }
}

module.exports = OldManoftheSea;
