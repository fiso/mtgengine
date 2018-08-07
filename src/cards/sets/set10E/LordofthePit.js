"use strict";
const Constants = require ("../../../Constants");
const LordofthePitBase = require("../setIMA/LordofthePit");

class LordofthePit extends LordofthePitBase {
  constructor (game) {
    super(game, "Lord of the Pit", "Tenth Edition", "10E");
  }
}

module.exports = LordofthePit;
