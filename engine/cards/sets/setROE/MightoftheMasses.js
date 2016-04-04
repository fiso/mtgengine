"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightoftheMassesBase = require("../setORI/MightoftheMasses.js");

class MightoftheMasses extends MightoftheMassesBase {
  constructor(game) {
    super(game, "Might of the Masses", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MightoftheMasses;
