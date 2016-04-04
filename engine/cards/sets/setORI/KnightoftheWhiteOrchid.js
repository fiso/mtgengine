"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightoftheWhiteOrchidBase = require("../setDDG/KnightoftheWhiteOrchid.js");

class KnightoftheWhiteOrchid extends KnightoftheWhiteOrchidBase {
  constructor(game) {
    super(game, "Knight of the White Orchid", "Magic Origins", "ORI");
  }
}

module.exports = KnightoftheWhiteOrchid;
