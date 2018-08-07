"use strict";
const Constants = require ("../../../Constants");
const HecklingFiendsBase = require("../setCNS/HecklingFiends");

class HecklingFiends extends HecklingFiendsBase {
  constructor (game) {
    super(game, "Heckling Fiends", "Dark Ascension", "DKA");
  }
}

module.exports = HecklingFiends;
